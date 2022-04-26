import { Restaurant } from "..";

interface IPlaceHolderProps {
  repeatCount: number;
  isFamousContainer: boolean;
}

export default function RestaurantPlaceHolder({
  repeatCount,
  isFamousContainer,
}: IPlaceHolderProps) {
  const howMany = Array.from(Array(repeatCount).keys());

  const restaurantData = {
    id: '',
    restaurantName: '',
    avatar_url: '',
    category: '',
    distance: 0,
    start_time: 0,
    end_time: 0,
    rate: 0,
  };

  return (
    <>
      {howMany.map(placeholder => (
        <Restaurant
          key={placeholder}
          isFamousContainer={isFamousContainer}
          restaurantData={restaurantData}
          loading          
        />
      ))}
    </>
  );
}
