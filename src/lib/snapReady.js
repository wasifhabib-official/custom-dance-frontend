let initialized = false;

function isBrowser() {
  return typeof window !== "undefined";
}

export function notifySnapReady(reason = "notify") {
  if (!isBrowser()) {
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.snapReady = true;
      console.log("SNAP READY TRIGGERED", reason);
    });
  });
}

export function initSnapReady() {
  if (!isBrowser() || initialized) {
    return;
  }

  initialized = true;
  window.snapReady = false;
}
