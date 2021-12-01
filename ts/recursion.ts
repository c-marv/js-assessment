const recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function (data: any, dirName: string = ''): string[] {
    const iterateDirectories = (dir: any, directoryName: string, files: string[], isDirectory: boolean): string[] => {
      let result = [];
      const newIsDirectory = dir.dirName === directoryName || directoryName === '' || isDirectory;
      if (dir.subDirs && dir.subDirs.length) {
        // eslint-disable-next-line guard-for-in
        // eslint-disable-next-line no-restricted-syntax
        for (const subDir of dir.subDirs) {
          const newFiles = iterateDirectories(subDir, directoryName, files, newIsDirectory);
          result = [...result, ...newFiles];
        }
      }
      if (newIsDirectory) {
        return [...dir.files, ...result];
      }
      return result;
    };
    return iterateDirectories(data, dirName, [], false);
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  },
};
