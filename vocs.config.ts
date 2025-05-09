import { defineConfig } from "vocs";

export default defineConfig({
  title: "Recoup API",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "API Reference",
      items: [
        {
          text: "Artist",
          items: [
            {
              text: "Artist Socials",
              link: "/artist/socials",
            },
            {
              text: "Artist Segments",
              link: "/artist/segments",
            },
          ],
        },
        {
          text: "Social",
          items: [
            {
              text: "Social Posts",
              link: "/social/posts",
            },
            {
              text: "Spotify Search API",
              link: "/spotify/search",
            },
          ],
        },
        {
          text: "Segment",
          items: [
            {
              text: "Segment Fans",
              link: "/segment/fans",
            },
          ],
        },
        {
          text: "Post",
          items: [
            {
              text: "Post Comments",
              link: "/post/comments",
            },
          ],
        },
        {
          text: "Additional Features",
          items: [
            {
              text: "Image Generation",
              link: "/image-generation",
            },
          ],
        },
        {
          text: "Legacy API (Deprecated)",
          items: [
            {
              text: "Artist Profile (Deprecated)",
              link: "/artist-profile",
            },
            {
              text: "Comments (Deprecated)",
              link: "/comments",
            },
            {
              text: "Fans (Deprecated)",
              link: "/fans",
            },
            {
              text: "Posts (Deprecated)",
              link: "/posts",
            },
          ],
        },
      ],
    },
  ],
});
