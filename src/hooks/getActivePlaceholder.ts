export default function getActivePlaceholder(placeholders) {
  const now = Date.now();
  const placeholder = placeholders.filter(placeholder => {
    // If not an explicit date, set it to the epoch/infinity
    const activeAt = new Date(placeholder.activeAt).getTime() || new Date(0);
    const inactiveAt = new Date(placeholder.inactiveAt).getTime() || Infinity;

    return activeAt < now && now < inactiveAt;
  })[0];

  return placeholder;
}
