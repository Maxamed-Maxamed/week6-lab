"use strict";
const _ = require("lodash");

const playlistStore = {
  // import the playlist collection object
  playlistCollection: require("./playlist-store.json").playlistCollection,

  // function to get all of the playlists
  getAllPlaylists() {
    return this.playlistCollection;
  },
  getPlaylist(id) {
    return _.find(this.playlistCollection, { id: id });
  },

};

// export the playlistStore object so it can be used elsewhere
module.exports = playlistStore;
