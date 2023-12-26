import { BudgetCalculatorProps } from "./BudgetCalculator.props";
import { useForm, SubmitHandler } from "react-hook-form"
import { ResultTable } from "entities/ResultTable";
import { useState } from "react";

type Inputs = {
    budget: number,
    youselfPercent: number,
    entertainmentPercent: number,
    giftsPercent: number,
    charityPercent: number,
    savingsPercent: number,
    purchasesPercent: number,
}

function BudgetCalculator({ test }: BudgetCalculatorProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()

    const lifeSum = 2500
    const [data, setData] = useState<undefined | Map<any, any>>(undefined);



    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        const result: any = {}
        result.life = lifeSum
        result.youself = data.budget * (data.youselfPercent / 100)
        const remainder = data.budget - result.youself - lifeSum
        result.entertainment = remainder * (data.entertainmentPercent / 100)
        result.gifts = remainder * (data.giftsPercent / 100)
        result.charity = remainder * (data.charityPercent / 100)
        result.savings = remainder * (data.savingsPercent / 100)
        result.purchases = remainder * (data.purchasesPercent / 100)

        const map = new Map();
        map.set("На жизнь", result.life);
        map.set("Себе", result.youself);
        map.set("Развлечения", result.entertainment);
        map.set("Подарки", result.gifts);
        map.set("Благотворительность", result.charity);
        map.set("Сбережения", result.savings);
        map.set("Покупки", result.purchases);

        console.log(result)
        setData(map)

    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div>Сумма дохода</div>
                    <input {...register("budget", { required: true })} />
                    {errors.budget && <div>Сумма дохода обязательна</div>}
                </div>

                <div>
                    <div>Процент себе</div>
                    <input defaultValue={10} {...register("youselfPercent", { required: true })} />
                    {errors.youselfPercent && <div>Поле обязательно</div>}
                </div>

                <div>
                    <div>Процент на развлечения</div>
                    <input defaultValue={8} {...register("entertainmentPercent", { required: true })} />
                    {errors.entertainmentPercent && <div>Поле обязательно</div>}
                </div>

                <div>
                    <div>Процент на подарки</div>
                    <input defaultValue={8} {...register("giftsPercent", { required: true })} />
                    {errors.giftsPercent && <div>Поле обязательно</div>}
                </div>

                <div>
                    <div>Процент на благотворительность</div>
                    <input defaultValue={4} {...register("charityPercent", { required: true })} />
                    {errors.charityPercent && <div>Поле обязательно</div>}
                </div>


                <div>
                    <div>Процент на покупки</div>
                    <input defaultValue={40} {...register("purchasesPercent", { required: true })} />
                    {errors.purchasesPercent && <div>Поле обязательно</div>}
                </div>

                <div>
                    <div>Процент на накопления</div>
                    <input defaultValue={40} {...register("savingsPercent", { required: true })} />
                    {errors.savingsPercent && <div>Поле обязательно</div>}
                </div>


                <input type="submit" />
            </form>
            <div>
                <ResultTable data={data}/>
            </div>
        </>

    );
}

export default BudgetCalculator;