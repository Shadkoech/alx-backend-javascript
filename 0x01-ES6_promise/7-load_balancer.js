export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

// Promise.race() is used to create a new Promise that resolves or rejects as soon as one of the
// Promises in the iterable resolves or rejects, with the value or reason from that Promise.
