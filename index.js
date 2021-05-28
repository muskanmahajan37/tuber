const { execSync } = require("child_process");

const zalgo = (i) =>
  i.split``.map((e) =>
    e.match(/[a-z]/i)
      ? e +
        Array(
          (i = ~~(
            (M = Math).sqrt(-50 * M.log((R = M.random)() || 0.1)) *
              M.cos(M.PI * R() || 0.1) +
            10
          )) < 0
            ? 0
            : i
        )
          .fill()
          .map((f) => String.fromCharCode(~~(R() * 48 + 768))).join``
      : e
  ).join``;

const randInt = (min = 0, max = 10) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const messages = [
  "initial commit",
  "update readme.md",
  "update",
  "first commit",
  "dummy",
  "update readme",
  "pi push",
  "create readme.md",
  "fix",
  "cleanup",
  "test",
  "typo",
  "wip",
  "bump version",
  "updates",
];

for (let i = 0; i <= randInt(1); i++) {
  const randomIdx = randInt(0, messages.length - 1);
  const message = zalgo(messages[randomIdx]);

  execSync(`git commit -m "${message}" --allow-empty`);
}
