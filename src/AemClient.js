import { ModelClient } from '@adobe/aem-spa-page-model-manager';

const FETCH_CONFIG = {
    headers: {
        Authorization: 'Basic YWRtaW46YWRtaW4='
    }
};

export class AemClient extends ModelClient {
    fetch(modelPath) {
        if (!modelPath) {
            const err = `Fetching model for path ${modelPath} failed`;
            return Promise.reject(err);
        }

        const url = `${this._apiHost}${modelPath}`;

        return fetch(url, FETCH_CONFIG).then(response => {
            const { status, statusText } = response;
            if (status >= 200 && status < 300) {
                return response.json();
            } else {
                const error = new Error(
                    `Error fetching the model for url ${url}:`,
                    statusText || status
                );
                return Promise.reject(error);
            }
        });
    }
}
