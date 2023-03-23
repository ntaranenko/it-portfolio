import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function EducationCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADGCAMAAADFYc2jAAAAyVBMVEX/bAD///8AAAD/dgBKGwD/WAD/3cT/YwD/cQDLVwD/mWX/t4r/XgD/8+f/aQD/rn3/ejf/l1r/uZf4+PgiIiL/7+TZ2dn/69v//Pjp6eni4uL/lWH/soR+fn5lZWUREREwMDCioqKVlZVKSkrAwMDVWgA5EwDqaQD/qG3/5M7/jk1zMACmSAA3Nzd2dnbMzMz/xaD/byr/UQCtra1YWFiLi4tDQ0MnJycdCADXZACOPwAPAACANwC5UwBoKAC0tLQkCwBRHgA9GAAUH+TxAAADtUlEQVR4nO3b/V+aQADH8cSatUy34Vy6oaL2uIKWZs+r7f//oxZwwAFH05e8UrrP+6fkjPMrx91x4MYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACF264WS1VHbatQjQLTHxxuFupoO1NH/fjkQ4FOTmvFxd8xivUze/y3diuF+rjG8Y2zTH6t4t/cppu/VvGNzfTh1yu+cZfKr1l8YyfZ/HWLf19N5NctvvGQaP7axTce5fz6xb+RJ3/6xTd+S4dfw/jy5E/H+NLkr7TxR45l9c5zCvtTx3Km/bz/PYwOfynj9x3XDKozn3qZ0pbVFoVt61q9g2jylxN/f7fpuxAvL5oqx3sriT9tyzW6g2Sp05UKu9lvx7dTfTX+3q+t+ovLUxH/u/8y7fLbKuIP03Xacuk4Vfik3MfN0evxP/nLNrXPYXxlqvoq4tuZOt1X0uflF0sfS8XfWkF8K1NluxWXThRZbNVuxOSvbPHPzTC07VgT7zQ3pXN/Gn0l9tUk7ANM5fn/7I9+ZYsfHt6h/6pvmRU5nJsIbImvys3u5sWf6pLxG28ff9AJqokyDxyptBcUdsL2MBP5U2OD4I1+88dvNORF7Ibn7eOLM1/dnYW9YvyNDOWmknZ/sD1n/MreV99J3f9gtV3xev+t4wdt3xx5f7diojQ42zvx2wfBFnXr9yZ/c8YPN9f9zfUvyn96g/hjKeC4Ygph329mmkbQGchjg+yhWrL4beloxkO8iNcK4ssDXdBaujlzX+OxVq747oLxn95XfLnxu+n4+Y0/59rvrmyNX3R9M+/v4fhFIn5wapjx28+DcTKn6/tbuq4vPfC1EvEz45wdbLCU6e9v5x741iX+dWrak4wv5rzRLDecA6vb/tnc0561iR9d74kj3EvEj3rDoTfPG4RXxhNl+gUmvesTP5z1VroTx7kSiz5R/Fn4MTru2A3f2Zmp0i9yybM+8Q1HUWk8rckshVTkObBskQveNYqvSjiOT+7sBf9QuZeHRZY71il+9viP5a7NThVeKffx/J+1vrz4G6uPbwzGZlyh6aZO7ZErF+ZMeBZb6ow2XwZLnKuN/zKi2cGlnNkeTrOlvUnw9XRsRaFvwYXuaHPzh6f5YcXxPeejkXoZw9OajWa5dznKfptjSe/hJtcS9L7FqfcNbs0fb9D74Ra9H226Tz7XqFl8b21f4/h6P9Sq9yPNmj/QrvfPGUr2Yxa9f8qk+Q/ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI/QOzCoqftgU3CgAAAABJRU5ErkJggg=="
        alt="Company logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Full Stack Developer</h4>
        <p className="font-bold text-2xl mt-1">Zifferblatt</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="Tech icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="Tech icon"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt="Tech icon"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">15.08.2022 - 04.07.2023</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
