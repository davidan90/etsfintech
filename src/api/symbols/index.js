import { checkStatus, logError } from "../utils";

export const symbols = {
  endpoints(url) {
    const mainUrl = "http://jsonstub.com/etsfintech/symbols";
    return params => {
      const urls = {
        all: `${mainUrl}`,
        detail: `${mainUrl}/${params ? params.id : 0}`
      };
      return urls[url];
    };
  },

  async getAll() {
    const all = this.endpoints("all");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "JsonStub-User-Key": "9facef2e-9583-4a83-9f08-c87159f1c113",
        "JsonStub-Project-Key": "6ed070c1-b334-4612-8fa8-169c5e45baef"
      }
    };

    return fetch(all(), options)
      .then(checkStatus)
      .then(response => response.json())
      .then(data => data)
      .catch(logError("Symbols getAll"));
  },

  async getDetail(id) {
    const detail = this.endpoints("detail");
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "JsonStub-User-Key": "9facef2e-9583-4a83-9f08-c87159f1c113",
        "JsonStub-Project-Key": "6ed070c1-b334-4612-8fa8-169c5e45baef"
      }
    };

    return fetch(detail({ id }), options)
      .then(checkStatus)
      .then(response => response.json())
      .then(data => data)
      .catch(logError(`Symbols getDetail ${id}`));
  }
};
