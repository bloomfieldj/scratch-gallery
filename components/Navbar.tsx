import React, { useState} from "react";
import Link from "next/link";
import { animate, AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/router";
import { projects } from "../data/projects";



export default function Navbar(){
  const [selected, setSelected] = useState(0);

    const router = useRouter()
    
    const isActiveLink = function (href: string, currentPath: string): boolean {
        if (href === '/'){
            return false
        }
        return currentPath.startsWith(href)
    }

    return (
      <AnimateSharedLayout>  
        <nav>
          {
              projects.map(({href, name, id}) => (
                  <h1 key = {id} onClick={() => setSelected(id)}>
                    <Link  href = {href}>
                      <a className = {`title ${id === selected && "selected"}`}>
                        Projet {id}
                        {isActiveLink(href, router.pathname) && (
                          <motion.div layout
                          transition = {{duration: 0.5}}
                          className="underline"
                          layoutId="underline"
                          style={{ backgroundColor: '#ffc221' }}
                        />
                            )}
                      </a>
                    </Link>
                  </h1>
              ))
          }
        </nav>
      </AnimateSharedLayout>
        )
}