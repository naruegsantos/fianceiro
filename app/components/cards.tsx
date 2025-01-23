import AssetsCard from "./assetsCard";
import LiabilitiesCard from "./liabilitiesCard";
import { IAsset, ILiabilities } from "./types";

export default function Cards({assets, liabilities}:{assets:IAsset[], liabilities:ILiabilities[]}) {
  
  return (
    <section className="flex gap-10 flex-col w-9/12">
      <AssetsCard data={assets}/>
      <LiabilitiesCard data={liabilities}/>
    </section>
  )
}