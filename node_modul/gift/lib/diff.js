// Generated by CoffeeScript 1.9.1
(function() {
  var Blob, Diff, _;

  _ = require('underscore');

  Blob = require('./blob');

  module.exports = Diff = (function() {
    function Diff(repo1, a_path1, b_path1, a_blob, b_blob, a_mode1, b_mode1, new_file1, deleted_file1, diff1, renamed_file1, similarity_index) {
      this.repo = repo1;
      this.a_path = a_path1;
      this.b_path = b_path1;
      this.a_mode = a_mode1;
      this.b_mode = b_mode1;
      this.new_file = new_file1;
      this.deleted_file = deleted_file1;
      this.diff = diff1;
      this.renamed_file = renamed_file1 != null ? renamed_file1 : false;
      this.similarity_index = similarity_index != null ? similarity_index : 0;
      if (a_blob !== null) {
        this.a_blob = new Blob(this.repo, {
          id: a_blob
        });
        this.a_sha = a_blob;
      }
      if (b_blob !== null) {
        this.b_blob = new Blob(this.repo, {
          id: b_blob
        });
        this.b_sha = b_blob;
      }
    }

    Diff.prototype.toJSON = function() {
      return {
        a_path: this.a_path,
        b_path: this.b_path,
        a_mode: this.a_mode,
        b_mode: this.b_mode,
        new_file: this.new_file,
        deleted_file: this.deleted_file,
        diff: this.diff,
        renamed_file: this.renamed_file,
        similarity_index: this.similarity_index
      };
    };

    Diff.parse = function(repo, text) {
      var a_blob, a_mode, a_path, b_blob, b_mode, b_path, deleted_file, diff, diff_lines, diffs, lines, m, new_file, ref, ref1, ref2, ref3, ref4, ref5, renamed_file, sim_index;
      lines = text.split("\n");
      diffs = [];
      while (lines.length && lines[0]) {
        ref = /^diff\s--git\s"?a\/(.+?)"?\s"?b\/(.+)"?$/.exec(lines.shift()), m = ref[0], a_path = ref[1], b_path = ref[2];
        if (/^old mode/.test(lines[0])) {
          ref1 = /^old mode (\d+)/.exec(lines.shift()), m = ref1[0], a_mode = ref1[1];
          ref2 = /^new mode (\d+)/.exec(lines.shift()), m = ref2[0], b_mode = ref2[1];
        }
        if (!lines.length || /^diff --git/.test(lines[0])) {
          diffs.push(new Diff(repo, a_path, b_path, null, null, a_mode, b_mode, false, false, null));
          continue;
        }
        sim_index = 0;
        new_file = false;
        deleted_file = false;
        renamed_file = false;
        if (/^new file/.test(lines[0])) {
          ref3 = /^new file mode (.+)$/.exec(lines.shift()), m = ref3[0], b_mode = ref3[1];
          a_mode = null;
          new_file = true;
        } else if (/^deleted file/.test(lines[0])) {
          ref4 = /^deleted file mode (.+)$/.exec(lines.shift()), m = ref4[0], a_mode = ref4[1];
          b_mode = null;
          deleted_file = true;
        } else if (m = /^similarity index (\d+)\%/.exec(lines[0])) {
          sim_index = m[1].to_i;
          renamed_file = true;
          lines.shift();
          lines.shift();
        }
        ref5 = /^index\s([0-9A-Fa-f]+)\.\.([0-9A-Fa-f]+)\s?(.+)?$/.exec(lines.shift()), m = ref5[0], a_blob = ref5[1], b_blob = ref5[2], b_mode = ref5[3];
        if (b_mode) {
          b_mode = b_mode.trim();
        }
        diff_lines = [];
        while (lines[0] && !/^diff/.test(lines[0])) {
          diff_lines.push(lines.shift());
        }
        diff = diff_lines.join("\n");
        diffs.push(new Diff(repo, a_path, b_path, a_blob, b_blob, a_mode, b_mode, new_file, deleted_file, diff, renamed_file, sim_index));
      }
      return diffs;
    };

    Diff.parse_raw = function(repo, text) {
      var a_mode, a_path, a_sha, b_mode, b_path, b_sha, deleted_file, diffs, i, len, line, lines, new_file, ref, renamed_file, status;
      lines = _.compact(text.split("\n"));
      diffs = [];
      for (i = 0, len = lines.length; i < len; i++) {
        line = lines[i];
        line = line.slice(1);
        line = line.replace(/\.\.\./g, '');
        ref = line.split(/\s/), a_mode = ref[0], b_mode = ref[1], a_sha = ref[2], b_sha = ref[3], status = ref[4], a_path = ref[5], b_path = ref[6];
        if (!b_path) {
          b_path = a_path;
        }
        new_file = status === 'M';
        deleted_file = status === 'D';
        renamed_file = status === 'R';
        diffs.push(new Diff(repo, a_path, b_path, a_sha, b_sha, a_mode, b_mode, new_file, deleted_file, null, renamed_file, null));
      }
      return diffs;
    };

    return Diff;

  })();

}).call(this);
