import Header from "components/Header";

export const Listings = ()=> {
  //added in some dummy data so pass down props to property component

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header/>
        <p></p>
        {/* <Property propertyProps={propertyProps} /> */}
      </main>
    </>
  );
}
