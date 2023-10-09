import Banner from "@/Components/HomeComponents/Banner";
import MainLayout from "@/Layout/MainLayout";

const index = () => {
  return (
    <div>
      indexssss
      <Banner></Banner>
    </div>
  );
};

export default index;

index.getLayout = function getLayout(page : any) {
  return <MainLayout>{page}</MainLayout>;
};