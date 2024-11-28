import FakeData from "@/Shared/FakeData";
import React from "react";
import CarItem from "./CarItem";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const MostSearchCar = () => {
  return (
    <div className="mx-24">
      <h2 className="font-bold text-3xl text-center mt-16 mb-8">Most Search Cars</h2>

      <Carousel>
        <CarouselContent>
          {FakeData.carList.map((car, idx) => (
            <CarouselItem className="basis-1/4">
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchCar;
