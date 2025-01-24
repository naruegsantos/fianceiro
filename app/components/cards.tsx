import AssetsCard from "./assetsCard";
import ExpensesCard from "./expensesCard";
import LiabilitiesCard from "./liabilitiesCard";
import { IAsset, ILiabilities } from "./types";

export default function Cards({assets, liabilities}:{assets:IAsset[], liabilities:ILiabilities[]}) {
  
  return (
    <section className="flex gap-20 flex-col w-full">
      <AssetsCard data={assets}/>
      <LiabilitiesCard data={liabilities}/>
      <ExpensesCard data={liabilities}/>
    </section>
  )
}