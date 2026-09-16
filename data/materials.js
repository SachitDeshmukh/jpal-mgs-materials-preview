/*
  PUBLIC MATERIALS CATALOGUE
  ==========================

  Each material subsection can contain MULTIPLE digital files.

  Example:
    files: [
      { name: "File 1", files: [{ name: "Digital file", driveId: "GOOGLE_DRIVE_FILE_ID" }] },
      { name: "File 2", files: [{ name: "Digital file", driveId: "GOOGLE_DRIVE_FILE_ID" }] }
    ]

  For a Drive URL like:
    https://drive.google.com/file/d/FILE_ID/view
                                      ^^^^^^^
  put only FILE_ID into driveId.

  IMPORTANT:
  - Only include resources you want public.
  - Do NOT add answer keys to this catalogue.
  - A material can have zero, one, or many digital files.
*/

window.MATERIALS_DATA = {
  title: "Every Child Counts",
  subtitle: "Understanding classroom materials for Class 1",
  intro: "Explore what is in the classroom kit and preview the digital files used with each activity.",
  activities: [
    {
      id: "number-comparison",
      number: "01",
      title: "Number Comparison",
      accent: "orange",
      materials: [
        {
          id: "nc-posters",
          name: "Numeracy Concept Posters: Number Line",
          type: "Posters",
          quantity: "2 posters",
          details: "The number line ranges from 0 to 100 across two posters. Students can refer to it during gameplay.",
          files: [
            { name: "Line poster 1", driveId: "1b1R6uYOlujPsRh5UQDSgDZM0yIyj4C80" },
            { name: "Line poster 2", driveId: "1awM7CGgWnvw_vPsDNYGpXMC6IsT_cBbU" }
          ]
        },
        {
          id: "nc-concept",
          name: "Concept (Pre-training) Cards",
          type: "Cards",
          quantity: "8 cards",
          details: "Each card has a number on one side and the same number of dots on the other side. Used to familiarise students with identifying numbers and quantities.",
          files: [{ name: "Pre-training cards", driveId: "1bR1CT08zU0U-n_EETFNur6FXMLB2AfqS" }]
        },
        {
          id: "nc-demo",
          name: "Demonstration (Practice) Cards",
          type: "Decks",
          quantity: "8 decks · 4 cards/deck",
          details: "Teachers use these cards to model the game by walking through the first card step-by-step.",
          files: [
            { name: "Demonstration cards deck 1", driveId: "1k_8jNSVF2MWVfg6xgczZCZdDmpYU--n1" },
            { name: "Demonstration cards deck 2", driveId: "1mZi8YAadikVONDjz27YKe_3b0EHrupCw" },
            { name: "Demonstration cards deck 3", driveId: "1nDlBHCETNZ_CmTSTyUEdbnCORcwUBwDd" },
            { name: "Demonstration cards deck 4", driveId: "1nfVp3bubcv7Lg-S8c9NN7IkSK8xTFxls" },
            { name: "Demonstration cards deck 5", driveId: "1nWVDB8Lont8kwXhUnQDMsO2wCyt9YsSf" },
            { name: "Demonstration cards deck 6", driveId: "1nMuBVlZnGioTiIrssRYXUXzJMyPgJohP" },
            { name: "Demonstration cards deck 7", driveId: "1ntwjtdWTKcOsezKew_IEOxp14KZ52TFd" },
            { name: "Demonstration cards deck 8", driveId: "1nNjljT6pJPBXa2O1F1gliTeyE_e56gQ7" }
          ]
        },
        {
          id: "nc-student",
          name: "Student Gameplay (Main) Cards",
          type: "Decks · small cards",
          quantity: "8 decks · 24 cards/deck",
          details: "Used by students in groups of four to play the game with minimal teacher support.",
          files: [
            { name: "Student gameplay cards deck 1", driveId: "1lz3vl9lmU9x4kGLo-IDzyRY2zl2Y2lBr" },
            { name: "Student gameplay cards deck 2", driveId: "1mByBOsrlnA3nrQhlvV5QXtpK4Y7JBBZD" },
            { name: "Student gameplay cards deck 3", driveId: "1mHJCOwV07LVsoZlLQ8qc1LngN_sgBSi2" },
            { name: "Student gameplay cards deck 4", driveId: "1mJE4rkzPwhW3BQKTepPd7XOSLbjcX7sl" },
            { name: "Student gameplay cards deck 5", driveId: "1n7Vn0-W0xtmpkG126tcliZcX0--q7dZ_" },
            { name: "Student gameplay cards deck 6", driveId: "1maCmZSWmdy54MHTO9ZikAs0-3_jH98Yn" },
            { name: "Student gameplay cards deck 7", driveId: "1udxvzsCKJUxqBpAvP6NX2MnBogCJDqu8" },
            { name: "Student gameplay cards deck 8", driveId: "1nAGlEDoz-My5EmWR5jnFTzd3Y0qA35tC" }
          ]
        }
      ]
    },
    {
      id: "find-shape",
      number: "02",
      title: "Find Shape",
      accent: "coral",
      materials: [
        {
          id: "fs-posters",
          name: "Geometry Concept Posters",
          type: "Posters",
          quantity: "2 posters",
          details: "One poster focuses on sides and lengths of sides; the other focuses on angles and parallel lines.",
          files: [{ name: "Geometry posters", driveId: "1a7I0pqIzNNNl4JWtdAdqZ6CzyPHXpVo0" }]
        },
        {
          id: "fs-demo",
          name: "Demonstration (Practice) Cards",
          type: "Decks",
          quantity: "8 decks · 5 cards/deck",
          details: "Teachers use these cards to model the game by walking through the first card step-by-step.",
          files: [
            { name: "Demonstration cards deck 1", driveId: "1jLPKjNTd7or9jhEuQ5FzBLuhIXqOvSI4" },
            { name: "Demonstration cards deck 2", driveId: "1jJEuukO8oc12WGgpyMxa79djMYEIQm-f" },
            { name: "Demonstration cards deck 3", driveId: "1jfyBftD9tvObcjmz-Kv2xvssqd8am_p0" },
            { name: "Demonstration cards deck 4", driveId: "1jdO_VuDzk-n3EdJXLAZ4_6l8qvObk24J" },
            { name: "Demonstration cards deck 5", driveId: "1jWGQBYsmRMjCYRbDFco4grK5xYvJLbYa" },
            { name: "Demonstration cards deck 6", driveId: "1jtHGuTKTE6XzZ9APeSubHKKBsLbbdXjH" },
            { name: "Demonstration cards deck 7", driveId: "1kEWDmNo8Ld4Yue0s6WqUklpFeXHtRiD3" },
            { name: "Demonstration cards deck 8", driveId: "1k5gMSexF1suwW7gIf8H2hMl1lUx1ePZ7" }
          ]
        },
        {
          id: "fs-student",
          name: "Student Gameplay (Main) Cards",
          type: "Decks · small cards",
          quantity: "8 decks · 18 cards/deck",
          details: "Used by students in groups of four to play the game with minimal teacher support.",
          files: [
            { name: "Student gameplay cards deck 1", driveId: "1gqx3GaqIbvV8QH1PAvl-VLAkXIBKx6Ub" },
            { name: "Student gameplay cards deck 2", driveId: "1h2iHxakvhOTNFRRigddWb-8CwU6lo-3f" },
            { name: "Student gameplay cards deck 3", driveId: "1hTLYooSqhixxL3UJ-fIFHAs1e4Xk5ATo" },
            { name: "Student gameplay cards deck 4", driveId: "1hVGoFKI8B0w-naakXntdV0i523yWA_Ft" },
            { name: "Student gameplay cards deck 5", driveId: "1j-8L45j_S-621oCFoKvPowWu03c4arp6" },
            { name: "Student gameplay cards deck 6", driveId: "1jCWJBIm_9iJm_-dAw1lpXWMjpdHTDtWs" },
            { name: "Student gameplay cards deck 7", driveId: "1jAYvRDdbEKnkA_t-UK3xyDc1FX2nPmJ5" },
            { name: "Student gameplay cards deck 8", driveId: "1jLpb7CSIPTfmgsPi2JRYnJ5475J1_I_8" }
          ]
        }
      ]
    },
    {
      id: "find-move",
      number: "03",
      title: "Find & Move",
      accent: "gold",
      materials: [
        {
          id: "fm-teacher",
          name: "Demonstration (Teacher) Boards",
          type: "Boards",
          quantity: "2 boards",
          details: "Used by teachers to introduce concepts of tens and units, facilitate exact addition and demonstrate the game. The second board has missing numbers.",
          files: [
            { name: "Demonstration board for decks 1 to 3", driveId: "1aWbJ2mCB8PfTwhjCy1-dvRDYPahk3ClJ" },
            { name: "Demonstration board for deck 4", driveId: "1aV8mzpHFMTSzS3YtUcJxw5e3PdzUPPyK" }
          ]
        },
        {
          id: "fm-student-boards",
          name: "Student Gameplay Board Booklet",
          type: "Boards",
          quantity: "2 boards",
          details: "Student boards used during gameplay.",
          files: [{ name: "Student gameplay boards", driveId: "1alIWi_abhlyAcnUohw9DDLiO5pP7XqyT" }]
        },
        {
          id: "fm-demo",
          name: "Demonstration (Practice) Cards",
          type: "Decks",
          quantity: "4 decks · 4 cards/deck",
          details: "Teachers use these cards to model the game step-by-step.",
          files: [
            { name: "Demonstration cards deck 1", driveId: "1fiCnqizfMIDt-oq4ndWzscc2QCg-aCwk" },
            { name: "Demonstration cards deck 2", driveId: "1fYvsk-zepEyiZAe_AY8_yMrJCWKWmG9h" },
            { name: "Demonstration cards deck 3", driveId: "1fLW6-4BgzZmWSSgsdJoSC3FCCH02Q-lH" },
            { name: "Demonstration cards deck 4", driveId: "1g9GCVVkI-7AULxpME1xHJ3Hj4pko1-tF" }
          ]
        },
        {
          id: "fm-student",
          name: "Student Gameplay (Main) Cards",
          type: "Decks · small cards",
          quantity: "4 decks · 20 cards/deck",
          details: "Used by students in groups to play the game. Each deck should be played twice for sufficient exposure.",
          files: [
            { name: "Student gameplay cards deck 1", driveId: "1f9dp8k1IQP3Gb6SQ5JsbTyAzL5Z-697q" },
            { name: "Student gameplay cards deck 2", driveId: "1f-5rO8G73odKGNqAtByZvSBlpszhCZIl" },
            { name: "Student gameplay cards deck 3", driveId: "1erFLbj8hauWr6RSHQ3hIxBhsLF_SaA8l" },
            { name: "Student gameplay cards deck 4", driveId: "1emu9deZdRQdpvPrcvwSDqGFJEEWn7Az9" }
          ]
        }
      ],
      note: "The manual notes that the numeracy concept posters from Number Comparison can be placed in the classroom while playing Find & Move."
    },
    {
      id: "reading-maps",
      number: "04",
      title: "Reading Maps",
      accent: "plum",
      materials: [
        {
          id: "rm-location",
          name: "Location Concept Cards",
          type: "Sets",
          quantity: "4 sets · 2 cards/set",
          details: "Cards used to familiarise students with geometric concepts on sides, angles and parallel lines, as well as different locations marked on shapes.",
          files: [
            { name: "Location concept card sets 1 & 2", driveId: "1cbSqzHdeJqtmB3nKGiSWq6Lc8ZF0kvw9" },
            { name: "Location concept card sets 3 & 4", driveId: "1cSpDLiQVz-DHwA0pus2hf-Kx9oUgHUhN" }
          ]
        },
        {
          id: "rm-teacher",
          name: "Demonstration (Teacher) Boards",
          type: "Boards",
          quantity: "2 boards",
          details: "Used by teachers to demonstrate the game. Each board is used for a new deck of demonstration cards.",
          files: [{ name: "Demonstration boards", driveId: "1bAMyjCwa8jWMZyAyL2q1eZsxgNgb4Jq3" }]
        },
        {
          id: "rm-student-boards",
          name: "Student Gameplay Board Booklet",
          type: "Boards",
          quantity: "16 boards",
          details: "Student boards used during gameplay.",
          files: [{ name: "Student gampeplay boards", driveId: "1alW1pa8bnoezDE8FZVSPj67i6etX0dU7" }]
        },
        {
          id: "rm-demo",
          name: "Demonstration (Practice) Cards",
          type: "Decks",
          quantity: "8 decks · 4 cards/deck",
          details: "Teachers use these cards to model the game step-by-step.",
          files: [
            { name: "Demonstration cards deck 1", driveId: "1psR52npGYxK1e2RG4JyMezivkHRr63YG" },
            { name: "Demonstration cards deck 2", driveId: "1rjSM2yQr-clY5i8bTqMiVYLjiFlCSVu5" },
            { name: "Demonstration cards deck 3", driveId: "1rcHzirimalZOFByAuDB65vtqsmwSYaiA" },
            { name: "Demonstration cards deck 4", driveId: "1r_A9u6AV_p-w46Xb5ztCck7WJ871Hl2X" },
            { name: "Demonstration cards deck 5", driveId: "1kSUGdDpt825pTVPJv2VcF0IORDnYS01v" },
            { name: "Demonstration cards deck 6", driveId: "1rWG3TJhj9iV7tazytFa08oI6h2b8y3r7" },
            { name: "Demonstration cards deck 7", driveId: "1rVfmwsXcFxiV19pDCCDZPxfewSDg09ni" },
            { name: "Demonstration cards deck 8", driveId: "1rSmJOHVq3Y5Eur3a_gIfB1O9CPcRLb6-" }
          ]
        },
        {
          id: "rm-student",
          name: "Student Gameplay (Main) Cards",
          type: "Decks · small cards",
          quantity: "8 decks · 16 cards/deck",
          details: "Used by students in groups to play the game.",
          files: [
            { name: "Student gameplay cards deck 1", driveId: "1qe9kmklMjnKXJobtSJ2-e_ndysy0m0ks" },
            { name: "Student gameplay cards deck 2", driveId: "1qlVmvUZ3T5vP3TpkmC4S5TJLK5IT5-Sk" },
            { name: "Student gameplay cards deck 3", driveId: "1qYcKSqCOencFa_ZWiohD0Jb1-XKxQjyu" },
            { name: "Student gameplay cards deck 4", driveId: "1qk3IfbRtip7fGXHg2vjHC9Fbmq1M0tlc" },
            { name: "Student gameplay cards deck 5", driveId: "1qjGCL8CjaZLNI8oLcokFW3TL-Rej-EHw" },
            { name: "Student gameplay cards deck 6", driveId: "1r0YWzDz0jcXVWz__IeDhcwokSJCBJWfw" },
            { name: "Student gameplay cards deck 7", driveId: "1qzie9qL9qb71zeCQy0nsVqj5Pc1LuZeZ" },
            { name: "Student gameplay cards deck 8", driveId: "1qp53WX13X7h07k4O3zWM_q2eZvfbs3j2" }
          ]
        }
      ],
      note: "The manual notes that the geometry concept posters from Find Shape can be placed in the classroom while playing Reading Maps."
    }
  ]
};
