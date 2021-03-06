// Generated by CoffeeScript 1.9.1
(function() {
  var Git, Repo, exec;

  exec = require('child_process').exec;

  Repo = require('./repo');

  module.exports = Git = function(path, bare, git_options) {
    if (bare == null) {
      bare = false;
    }
    if (git_options == null) {
      git_options = {};
    }
    return new Repo(path, bare, git_options);
  };

  Git.init = function(path, bare, callback) {
    var bash, ref;
    if (!callback) {
      ref = [callback, bare], bare = ref[0], callback = ref[1];
    }
    if (bare) {
      bash = "git init --bare .";
    } else {
      bash = "git init .";
    }
    return exec(bash, {
      cwd: path
    }, function(err, stdout, stderr) {
      if (err) {
        return callback(err);
      }
      return callback(err, new Repo(path, bare));
    });
  };

  Git.clone = function(repository, path, callback) {
    var bash;
    bash = "git clone " + repository + " " + path;
    return exec(bash, function(err, stdout, stderr) {
      if (err) {
        return callback(err);
      }
      return callback(err, new Repo(path));
    });
  };

}).call(this);
