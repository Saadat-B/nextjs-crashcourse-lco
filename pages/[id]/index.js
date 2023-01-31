import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import Link from "next/link";

const axios = require("axios").default;

const EachHero = () => {
  return (
    <div className="container">
      <h1 className="display-3">Identity of hero</h1>
      <MDBCard className="border border-2 my-2" style={{ maxWidth: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>hero.superHero</MDBCardTitle>
          <MDBCardText>Reveal Identity</MDBCardText>

          <Link href={`/`}>
            <MDBBtn>Edit Hero</MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await axios("http://localhost:3000/api/hero");
  const heroIds = res.data.hero.map((hero) => hero._id);

  return {
    paths: heroIds.map((id) => {
      return {
        params: { id },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  // console.log(res.data.hero);
  const { hero } = res.data;
  console.log(hero);
  return {
    props: { heros: hero },
  };
}

export default EachHero;
