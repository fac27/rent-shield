import AddListingForm from 'components/addListing'
const page = () => {
  return (
    <>
      <div className="text-center justify-between p-5 m-5">
        <h2 className="text-xl font-semibold">Please add property details</h2>
        <p>
          Add your property details on this page. The important actions to note
          are: Images must be included for every room in the property and be of
          high quality and clear. We encourage you to also upload video of the
          property. There must be a minimum of 3 images uploaded to be able to
          post the property listing. You are asked to submit newly taken photos
          of the property to reflect its current state and not old original
          photos of the property.
          <br></br>
          You can create an account or login here. Save a draft of your listing
          and come back later if you need to.
        </p>
      </div>
      <AddListingForm />;
    </>
  )
}

export default page
