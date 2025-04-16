// make backend api calls
// import axios from "axios"

import { currentUser } from "."

const api_endpoint = process.env.GATSBY_BACKEND_API_ENDPOINT
const eventId = process.env.GATSBY_EVENT_ID
const organizationId = process.env.GATSBY_ORGANIZATION_ID
const hubspotListWebhook = process.env.GATSBY_HUBSPOT_LIST_WEBHOOK || ''
const hubspotListId = process.env.GATSBY_HUBSPOT_LIST_ID

export type AddContactToHubspotListProps = {
    email: string
    company?: string;
    firstname?: string;
    lastname?: string;
    phone?: string;
    website?: string;
}

export const getAttendeeByEmail = async (eventId, email) => {
    if (!eventId || !email) { throw new Error("eventId and email can not be null") }

    let response = await fetch(`${api_endpoint}/attendee/${eventId}/${email}`)
    if (!response.ok) {
        // TODO: DATADOG.LOG(response.text())
        console.error(response.text())
        return null
    }
    return response.json()
}

export const registerAttendee = async (eventId, attendee) => {
    let response = await fetch(
        `${api_endpoint}/attendee/${eventId}`,
        {
            method: 'POST',
            body: JSON.stringify({ attendee: attendee }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    return response.json()
}

export const getAttendeesByOrder = async (orderId) => {
    let response = await fetch(`${api_endpoint}/attendees_by_order/${orderId}`)
    if (!response.ok) {
        // TODO: DATADOG.LOG(response.text())
        console.error(response.text())
        return null
    }
    return response.json()
}

export const getAttendeesByOrderPromise = (orderId) => {
    return fetch(`${api_endpoint}/attendees_by_order/${orderId}`)
}

export const submitHubSpotForm = async (formData, formId) => {
    if (!formId) { throw new Error('cannot submit form without a formId'); }
}

export const getProfile = async ({ organizationId, eventId, email }) => {
    if (!eventId || !email || !organizationId) { throw new Error("organizationId, eventId and email can not be null") }

    // return fetch(`${api_endpoint}/${eventId}/profile?organizationId=${organizationId}&email=${email}`, {
    //     "method": "GET",
    //     "headers": {}
    // })
    // const endpoint = `${api_endpoint}/${eventId}/profile`
    // return axios({
    //     "method": "GET",
    //     "url": endpoint,
    //     "params": {
    //         organizationId,
    //         email
    //     }
    // })
}

export const getPlaylist = async (playlistId) => {
    // https://6xipdnwvd4.execute-api.us-east-1.amazonaws.com/dev/44422/playlist/1697571129723267040
    // let eventId = "0000"
    let endpoint = `${api_endpoint}/${eventId}/playlist/${playlistId}`
    let response = (await fetch(endpoint)).json()
    return response ? response : null
}

export const trackMetric = async ({ metricType, payload }) => {
    // let eventId = "113146163220"
    // let organizationId = "hpe"
    let endpoint = `${api_endpoint}/${eventId}/analytics`
    let username
    try {
        let user = await currentUser()
        username = user.username
    } catch (error) {
        username = ""
    }
    let body = { metricType, payload: { ...payload, username }, organizationId }
    // console.log(body)
    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}

export const trackPageview = async (url) => {
    trackMetric({
        metricType: "pageview",
        payload: {
            url,
        },
    });
}

export const addContactToHubspotList = async (payload: AddContactToHubspotListProps) => {
    if (!payload.email || !hubspotListId) {
        console.error("Missing either contact email or listId");
        return
    }
    return fetch(hubspotListWebhook, {
        method: 'POST',
        body: JSON.stringify({listId:hubspotListId, ...payload}),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
}