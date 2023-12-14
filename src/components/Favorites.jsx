import React from 'react'

export default function Favorites() {
  return (
    <div className="wrap3">
          <h1 className="abouttext">My Favorite pookie(s)♡</h1>
          <table border={1}>
            <tr>
              <th>I like</th>
              <th>I love</th>
            </tr>
            <tr>
              <th>
                <img
                  src="https://assets-a1.kompasiana.com/items/album/2023/09/07/31-1-64f98f5d4addee377c00f132.jpg"
                  width={300}
                  title="Kokichi Muta(与幸吉)"
                />
              </th>
              <th>
                <img
                  src="https://asset-2.tstatic.net/lombok/foto/bank/images/Yuta-Okkotsu-di-Anime-Jujutsu-Kaisen-Season-2-Episode-9.jpg"
                  width={300}
                  title="Okkotsu Yuuta (乙骨憂太)"
                />
              </th>
            </tr>
            <tr>
              <th>
                <img
                  src="https://img2.beritasatu.com/cache/beritasatu/960x620-3/2023/09/1695342704-728x409.webp"
                  width={300}
                  title="Gojo Satoru (五条悟)"
                />
              </th>
              <th>
                <img
                  src="https://media.suara.com/pictures/970x544/2023/10/15/18132-nanami-kento-karakter-dari-jujutsu-kaisen-jujutsukaisenjp.jpg"
                  title="Nanami Kento (七海建人)"
                  width={300}
                />
              </th>
            </tr>
            <tr>
              <th>
                <img
                  src="https://i.pinimg.com/originals/37/a7/41/37a741772edb327001977418fce231f2.jpg"
                  width={300}
                  title="Mei mei (冥冥)"
                />
              </th>
              <th>
                <img
                  src="https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/11/Screenshot-1532.png"
                  width={300}
                  title="Maki Zenin (禪院 真希)"
                />
              </th>
            </tr>
          </table>
        </div>
  )
}
