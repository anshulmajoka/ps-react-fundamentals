import Banner from "./banner";
import BannerV1 from "./bannerV1";
import BannerV2 from "./bannerV2";
import HouseList from "./houseList";
import HouseListV1 from "./houseListV1";

const App = () => {
  const jsx = <div> Hello this is jsx</div>
  return (
    <>
      {jsx}
      <BannerV1 headerText= "This is V1 Banner">
      </BannerV1>

      <BannerV2 headerText= "This is V2 Banner">
      </BannerV2>

      <HouseListV1 />

      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>   

      <HouseList />
    </>
  );
};

export default App;
