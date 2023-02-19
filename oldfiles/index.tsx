import type { NextPage } from "next";
import Image from "next/image";
import profilePic from "../../public/images/profile.jpg";
import SideBar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
// @ts-ignore
import { themeChange } from "theme-change";
import {useEffect} from "react"
import styles from '../styles/atom.module.css'
import pythonSvg from "../../public/images/python.svg"
import javaSvg from "../../public/images/java.svg"
import nodeSvg from "../../public/images/node.svg"
import typescriptSvg from "../../public/images/typescript.svg"
import reactSvg from "../../public/images/react.svg"
const Home: NextPage = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  // @ts-ignore
  // @ts-ignore
  return (
      <>
    <Header title={"Nate Brown"}></Header>
      <div className={"hero min-h-screen min-w-fit"}>
        <div className={"hero-content flex-col lg:flex-row-reverse "}>
          <div id={styles.atom}>
            <div className={styles.orbit}>
              <div className={styles.path}>
                <div className={styles.electron}>
                  <div className={styles.nodeLogoFix}>
                  <Image src={nodeSvg} alt={"NodeJS logo"}></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.path}>
                <div className={styles.electron}>
                  <div className={styles.reactFix}>
                    <Image src={reactSvg} alt={"React logo"} layout={"fill"}></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.path}>
                <div className={styles.electron}>
                  <div className={styles.tsLogoFix}>
                  <Image src={typescriptSvg} alt={"Typescript logo"}></Image>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.path}>
                <div className={styles.electron}>
                  <div className={styles.javaLogoFix}>
                  <Image src={javaSvg} alt={"Java logo"}></Image>
                  </div>
                  </div>
              </div>
            </div>
            <div className={styles.orbit}>
              <div className={styles.path}>
                <div className={styles.electron}>
                  <div className={styles.pythonFix}>
                  <Image src={pythonSvg} alt={"Pythonogo"}></Image>
              </div>
                </div>
              </div>
            </div>

          <div id={styles.nucleus}>
          <Image
            priority
            src={profilePic}
            layout="intrinsic"
            className={"rounded-full"}
            height={2160 / 2}
            width={2160 / 2}
            objectFit={"cover"}
            quality={100}
            alt={"Headshot of Nate Brown, with electrons circling like an atom."}
          />
          </div>
          </div>
          <div>
            <h1 className={"text-5xl font-bold"}>Nate Brown</h1>
            <p className={"py-6"}>
              Full stack developer. Website is still in progress.
            </p>
          </div>
        </div>
      </div>
        <div className={"md:absolute inset-y-1/3 right-5"}>
          <SideBar></SideBar>
        </div>
      </>
  );
};

export default Home;
