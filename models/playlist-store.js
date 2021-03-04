'use strict';

const _ = require('lodash');

const playlistStore = {

  playlistCollection: require('./playlist-store.json').playlistCollection,

  getAllPlaylists() {
    return this.playlistCollection;
  },

    getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },

};

module.exports = playlistStore;