// src/lib/albums.ts
export type Album = {
  slug: string;            // URL id (e.g. "popa-wedding")
  title: string;           // Display title
  username?: string;       // OPTIONAL: require this username
  images?: string[];       // OPTIONAL: explicit list; otherwise we auto-read the folder
  passcodeHash: string;    // bcrypt hash of the password
};

export const albums: Album[] = [
  {
    slug: "smith-wedding",
    title: "Smith Wedding",
    username: "smith",                          // <- username for login
    // images: ["/albums/smith-wedding/1.jpg"], // optional; otherwise we auto-read
    passcodeHash: "console.log(require('bcryptjs').hashSync('test123',10))"

  },
];
