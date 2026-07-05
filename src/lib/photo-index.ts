// Temporary labels for reviewing and replacing photos before launch.
const photoIndex = new Map<string, number>([
  ["/marina-gallery/02.jpg", 1],
  ["/marina-gallery/01.jpg", 2],
  ["/marina-gallery/03.jpg", 3],
  ["/marina-gallery/06.jpg", 4],
  ["/marina-gallery/09.jpg", 5],
  ["/marina-gallery/11.jpg", 6],
  ["/marina-gallery/10.jpg", 7],
  ["/marina-gallery/12.jpg", 8],
  ["/marina-gallery/interior/interior-01.jpg", 9],
  ["/marina-gallery/interior/interior-02.jpg", 10],
  ["/marina-gallery/interior/interior-03.jpg", 11],
  ["/marina-gallery/interior/interior-04.jpg", 12],
  ["/marina-gallery/interior/interior-05.jpg", 13],
  ["/marina-gallery/interior/interior-06.jpg", 14],
  ["/marina-gallery/interior/interior-07.jpg", 15],
  ["/marina-gallery/interior/interior-08.jpg", 16],
  ["/crew/captain-captain.jpg", 17],
  ["/homepage-hero-river.jpg?v=2", 18],
  ["/homepage-deck-event.jpg", 19],
  ["/terrace-sun-deck.jpg", 20],
  ["/terrace-sun-deck-bar.jpg", 21],
]);

export function getPhotoNumber(src: string) {
  return photoIndex.get(src);
}

export function formatPhotoNumber(src: string) {
  const number = getPhotoNumber(src);
  return number ? `Foto ${String(number).padStart(2, "0")}` : null;
}
