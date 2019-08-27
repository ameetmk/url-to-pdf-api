FROM buildkite/puppeteer

#RUN npm install -g yarn

RUN mkdir -p /usr/src/url-to-pdf-api
WORKDIR /usr/src/url-to-pdf-api

COPY . /usr/src/url-to-pdf-api

RUN cd /usr/src/url-to-pdf-api/
RUN npm install

EXPOSE 9000
CMD [ "npm", "start" ]

