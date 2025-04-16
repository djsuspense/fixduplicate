import { useLocation } from "@reach/router"
import { graphql, StaticQuery } from "gatsby"
import React, { FunctionComponent, useEffect, useRef, useState } from "react"
import Footer2021 from "../../components/footer2021"
import Layout2021b from "../../components/layout2021b"
import LoginModal from "../../components/modals/loginModal"
import MultiDayAgenda from "../../components/multidayagenda"
import { StyledLiveEventWrapper } from "../../components/styled"
import { LiveVideoPlayer, VideoPlaylist } from "../../components/videoPlayer"
import { useTracking } from "../../context"
import getActivePlaceholder from "../../hooks/getActivePlaceholder"
import { currentUser, trackPageview } from "../../services"

const Live: FunctionComponent = ({ data, pageContext: { videoId } }) => {
  const [status, setStatus] = useState("ready")
  const [modalState, setModalState] = useState(false)
  const {
    allSessionVideosTodayJson,
    allSpeakersJson,
    allSessionsJson,
    site,
  } = data
  const { defaultTabs, videoPlayerSetting } = site.siteMetadata
  const { agendaSpeakers } = allSpeakersJson
  const { agendaSessions } = allSessionsJson
  const sessionVideos = allSessionVideosTodayJson.sessions
  // set to null when player has placeholder img
  const refreshInterval = 1000
  const {
    liveMainVideoId,
    liveSessionPlaylistId,
    liveDVRVideoId,
    accoundId,
    playerId,
    placeholders,
  } = videoPlayerSetting
  const placeholder = getActivePlaceholder(placeholders)

  const tracking = useTracking()
  const location = useLocation()
  const timerIdRef = useRef(0)
  const [activeVideoIds, setActiveVideoIds] = useState([])
  const [nowPlayingVideoId, setNowPlayingVideoId] = useState(
    videoId || liveMainVideoId
  )
  const [updatedAgendaSessions, updateAgendaSessions] = useState(agendaSessions)
  const [playerRef, setPlayerRef] = useState(null)
  const [state, setState] = useState(false)

  const handleCatalogPlaylist = (err, playlist) => {
    if (err) {
      throw new Error(err)
    }
    let ids = playlist.map(video => video.id)
    setActiveVideoIds(ids)
  }

  const fetchPlaylist = () => {
    timerIdRef.current = setInterval(() => {
      playerRef &&
        playerRef.catalog.getPlaylist(
          liveSessionPlaylistId,
          handleCatalogPlaylist
        )
    }, refreshInterval)
  }

  const handleOnSuccess = () => {
    setModalState(true)
  }

  const requireAuth = () => {
    setModalState(false)
  }

  useEffect(() => {
    trackPageview(location.pathname)
    currentUser()
      .then(user => {
        if (!user) {
          //requireAuth()
        } else {
          setModalState(false)
        }
      })
      .catch(error => {
        console.error(error)
        //requireAuth()
      })
  }, [modalState])

  useEffect(() => {
    fetchPlaylist()
    return () => clearInterval(timerIdRef.current)
  }, [playerRef])

  const handleOnVideoPlayerSuccess = videoPlayerRef => {
    setPlayerRef(videoPlayerRef)
    videoPlayerRef.muted(true)
    videoPlayerRef
      .play()
      .then(() => {
        videoPlayerRef.muted(false)
      })
      .catch(error => {
        console.log("auto play failed")
      })
  }

  const handleOnLiveSessionVideoClick = video => {
    tracking.trackEvent({
      action: "pageview",
      event: "Interaction",
      payload: {
        href: location.href,
        videoId: video.videoId,
        type: "videoClick",
      },
    })

    setNowPlayingVideoId(video.videoId)
    playerRef &&
      playerRef.catalog.getVideo(video.videoId, (error, video) => {
        if (error) {
          console.error(error)
        }
        playerRef.catalog.load(video)
        playerRef.play()
        window.scrollTo(0, 0)
      })
  }

  const handleOnRegistrationClick = event => {
    event.preventDefault()
    setModalState(!modalState)
    if (status == "success" && modalState == false) {
      setStatus("ready")
    }
  }

  return (
    <>
      <Layout2021b disableHeader={true}>
        <StyledLiveEventWrapper>
          <LiveVideoPlayer
            accoundId={accoundId}
            playerId={playerId}
            onSuccess={handleOnVideoPlayerSuccess}
            videoId={nowPlayingVideoId}
            liveVideoId={liveMainVideoId}
            dvrVideoId={liveDVRVideoId}
            enablePlaceholder={placeholder && placeholder.enable}
            placeholder={
              placeholder
                ? placeholder.uri
                : "/images/player/placeholder-day-1.png"
            }
            liveVideoRefreshRate={5000} // in ms
          />
          <div className="toggleAgenda">
            <div className="container">
              <div className="followtxt">Follow along with today's agenda</div>
              <a className="tButton" onClick={() => setState(!state)}>
                <div className="blockleft">Agenda</div>
                {state && (
                  <div className="caretblock">
                    <img
                      src="https://cdn.fedscoop.com/upgather/it-modernization-summit/cup.png"
                      width="14px"
                    />
                  </div>
                )}
                {!state && (
                  <div className="caretblock">
                    <img
                      src="https://cdn.fedscoop.com/upgather/it-modernization-summit/cdown.png"
                      width="14px"
                    />
                  </div>
                )}
              </a>
            </div>
          </div>
          {state && (
            <MultiDayAgenda
              speakers={agendaSpeakers}
              sessions={updatedAgendaSessions}
              activeTab={defaultTabs.live}
            />
          )}

          <h1 className="titlecheck"></h1>
          <VideoPlaylist
            className="sessionWrap"
            onClick={handleOnLiveSessionVideoClick}
            activeVideoIds={activeVideoIds}
            videos={sessionVideos}
          />
        </StyledLiveEventWrapper>
        <Footer2021 />
      </Layout2021b>
      {modalState && (
        <LoginModal
          onRegisterClick={handleOnRegistrationClick}
          open={modalState}
          onFailure={() => console.error("LoginModal error")}
          onSuccess={handleOnSuccess}
          onClose={() => setModalState(false)}
          status={status}
          setStatus={setStatus}
        />
      )}
    </>
  )
}

export default ({ pageContext }) => (
  <StaticQuery
    query={graphql`
      query LivePageQuery {
        allSessionVideosTodayJson {
          sessions: nodes {
            date
            image
            title
            url
            videoId
          }
        }
        allSpeakersJson {
          agendaSpeakers: nodes {
            image
            name
            title
          }
        }
        allSessionsJson {
          agendaSessions: nodes {
            speakers {
              isModerator
              name
            }
            startTime
            title
            type
            endTime
            description
            date
            slug
            videoId
          }
        }
        site {
          siteMetadata {
            defaultTabs {
              live
            }
            videoPlayerSetting {
              accoundId
              playerId
              liveMainVideoId
              liveDVRVideoId
              liveSessionPlaylistId
              placeholders {
                activeAt
                inactiveAt
                uri
                enable
              }
            }
          }
        }
      }
    `}
    render={data => <Live data={data} pageContext={pageContext} />}
  />
)
