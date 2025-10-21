import Cards from "@/components/cards";
import Express from "@/components/express";
import Help from "@/components/help";
import HomePage from "@/components/home";
import Map from "@/components/map";
import Posts from "@/components/posts";
import Tasks from "@/components/tasks";
import Website from "@/components/website";

export default function Home() {
  return (
    <>
      <HomePage />
      <Website/>
      <Express/>
      <Cards/>
      <Tasks/>
      <Help/>
      <Posts/>
      <Map/>
    </>
  );
}
