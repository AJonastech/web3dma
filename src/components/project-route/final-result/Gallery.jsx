import PropTypes from "prop-types";
import React from "react";
import ClientTestimonial from "./ClientTestimonial";
import Image from "./Image";
import { useParams } from "react-router-dom";
import { dataSection5 } from "../../../mockData";

function GalleryContainer() {
  const { category, id } = useParams();
  const images = dataSection5[category][id].images;

  return (
    <>
      <div  className="w-full lg:space-y-[60px] space-y-[30px] ">
        {images.map((product, id) => {
          if (id + 1 === parseInt(images.length / 2)) {
            return (
              <React.Fragment key={id}>
                <Image product={product} />
                <ClientTestimonial  />
              </React.Fragment>
            );
          } else {
            return <Image product={product} key={id} />;
          }
        })}
      </div>
    </>
  );
}
GalleryContainer.propTypes = {
  setShowGallery: PropTypes.func,
};
export default GalleryContainer;
