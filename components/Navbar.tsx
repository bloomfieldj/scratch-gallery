import React from "react";
import Link from "next/link";

const projects: {id: number; name: string; href: string}[] = [
    {
        id: 1,
        name: "Animer mon nom",
        href: '/projet_1'
    },
    {
        id: 2,
        name:"Animer une histoire",
        href: '/projet_2'
    },
    {
        id: 3,
        name:"Animer un jeu",
        href: '/projet_3'
    }
]


export default function Navbar(){
    return (
        <nav>
          {
              projects.map(({href, name, id}) => (
                  <h1 key = {name} className="title">
                    <Link  href = {href}>
                      <a>
                        Projet {id}
                      </a>
                    </Link>
                  </h1>
              ))
          }
        </nav>
        )
}