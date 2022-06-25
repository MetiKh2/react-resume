import React, { useEffect, useState } from "react";
import {
  About,
  Experiences,
  Portfolio,
  Skills,
  ContactMe,
  Footer,
  Banner,
  Header,
} from "./components";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
const App = () => {
  const [personalInformation, setPersonalInformation] = useState({});
  const [personalInformationLoading, setPersonalInformationLoading] =
    useState(true);

  const [aboutInformation, setAboutInformation] = useState({});
  const [aboutInformationLoading, setAboutInformationLoading] = useState(true);

  const [skills, setSkills] = useState({});
  const [skillsLoading, setSkillsLoading] = useState(true);

  const [portfolioTypes, setPortfolioTypes] = useState([]);
  const [portfolioTypesLoading, setPortfolioTypesLoading] = useState(true);

  const [portfolios, setPortfolios] = useState([]);
  const [portfoliosLoading, setPortfoliosLoading] = useState(true);
  useEffect(() => {
    const fetchPersonalInformation = async () => {
      try {
        const docRef = doc(db, "PersonalInformation", "oiYrqIY1OaAOmwFSdEjx");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPersonalInformation(docSnap.data());
          setPersonalInformationLoading(false);
        } else {
          toast.error("We have an error, please try again");
        }
      } catch (error) {
        toast.error("We have an error, please try again");
      }
    };
    const fetchAboutInformation = async () => {
      try {
        const docRef = doc(db, "About", "JZKVTwXlYazCOKKmrrFw");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAboutInformation(docSnap.data());
          setAboutInformationLoading(false);
        } else {
          toast.error("We have an error in about, please try again");
        }
      } catch (error) {
        toast.error("We have an error in about, please try again");
      }
    };
    const fetchSkills = async () => {
      try {
        const docRef = doc(db, "Skills", "ssrBAH6sT9Sk1sS2exsg");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSkills(docSnap.data());
          setSkillsLoading(false);
        } else {
          toast.error("We have an error in skills, please try again");
        }
      } catch (error) {
        toast.error("We have an error in skills, please try again");
      }
    };
    const fetchPortfolioTypes = async () => {
      try {
        const collectionRef = collection(db, "PortfolioType");
        const querySnapshot = await getDocs(collectionRef);
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setPortfolioTypes(list);
        setPortfolioTypesLoading(false);
      } catch (error) {
        toast.error("We have an error in portfolio, please try again");
      }
    };
    const fetchPortfolios = async () => {
      try {
        const collectionRef = collection(db, "Portfolio");
        const querySnapshot = await getDocs(collectionRef);
        let list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setPortfolios(list);
        setPortfoliosLoading(false);
      } catch (error) {
        toast.error("We have an error in portfolio, please try again");
      }
    };
    fetchPersonalInformation();
    fetchAboutInformation();
    fetchSkills();
    fetchPortfolioTypes();
    fetchPortfolios();
  }, []);
  return (
    <>
      <Header />
      <Banner
        information={personalInformation}
        loading={personalInformationLoading}
      />
      <main className={"container"}>
        <About
          information={aboutInformation}
          loading={aboutInformationLoading}
        />
        <Skills skills={skills} loading={skillsLoading} />
        <Portfolio
          portfolios={portfolios}
          portfoliosLoading={portfoliosLoading}
          types={portfolioTypes}
          typesLoading={portfolioTypesLoading}
        />
        <div id="experience"></div>
      </main>
      <ContactMe
        address={aboutInformation?.Address}
        phone={aboutInformation?.Phone}
        email={aboutInformation?.Email}
      />
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
};

export default App;
