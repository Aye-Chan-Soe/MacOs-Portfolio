import {locations} from "@constants";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import Draggable from "gsap/Draggable";
import useWindowStore from "@store/window";
import useLocationStore from "@store/location";

const projects = locations.work?.children ?? [];

const Home = () => {
    const {openWindow} = useWindowStore()
    const {setActiveLocation} = useLocationStore()

    useGSAP(()=> {
        Draggable.create(".folder", )
    },[])

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project)
        openWindow("finder")
    }
  return (
    <section id="home">
        <ul>
            {projects.map((project)=>(
                <li key={project.id} className={clsx("group folder", project.windowPosition)}
                onClick={()=> handleOpenProjectFinder(project)}>
                    <img src="/images/folder.png" alt={project.name} className="w-13"/>
                    <p className=" text-sm">{project.name}</p>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Home