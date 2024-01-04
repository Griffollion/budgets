import { BudgetCalculatorProps } from "./BudgetCalculator.props";
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { ResultTable } from "entities/ResultTable";
import { useState } from "react";
import { Button, Space, Input, Form } from 'antd';
import styles from './BudgetCalculator.module.css'

type Inputs = {
    budget: number,
    lifeSum: number,
    youselfPercent: number,
    entertainmentPercent: number,
    giftsPercent: number,
    charityPercent: number,
    savingsPercent: number,
    purchasesPercent: number,
}

function BudgetCalculator({ test }: BudgetCalculatorProps) {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()
    const [data, setData] = useState<undefined | Map<any, any>>(undefined);



    const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
        const result: any = {}
        result.life = data.lifeSum
        result.youself = data.budget * (data.youselfPercent / 100)
        const remainder = data.budget - result.youself - data.lifeSum
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
        setData(map)
    }
    return (
        <>
            <Form
                layout="vertical"
                autoComplete="off"
                onFinish={handleSubmit(onSubmit)}
                style={{ maxWidth: 600 }}
                className={styles['form']}
            >
                <Form.Item
                    label="Сумма дохода"
                    validateStatus={errors.budget ? "error" : ''}
                    help={errors.budget ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}

                >
                    <Controller
                        name="budget"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                </Form.Item>

                <Form.Item
                    label="Сумма на жизнь"
                    validateStatus={errors.lifeSum ? "error" : ''}
                    help={errors.lifeSum ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="lifeSum"
                        defaultValue={2500}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                </Form.Item>

                <Form.Item
                    label="Процент себе"
                    validateStatus={errors.youselfPercent ? "error" : ''}
                    help={errors.youselfPercent ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="youselfPercent"
                        defaultValue={10}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                </Form.Item>

                <Form.Item
                    label="Процент на развлечения"
                    validateStatus={errors.entertainmentPercent ? "error" : ''}
                    help={errors.entertainmentPercent ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="entertainmentPercent"
                        defaultValue={8}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                    {errors.entertainmentPercent && <div>Поле обязательно для заполнения</div>}
                </Form.Item>

                <Form.Item
                    label="Процент на подарки"
                    validateStatus={errors.giftsPercent ? "error" : ''}
                    help={errors.giftsPercent ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="giftsPercent"
                        defaultValue={8}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                    {errors.giftsPercent && <div>Поле обязательно для заполнения</div>}
                </Form.Item>

                <Form.Item
                    label="Процент на благотворительность"
                    validateStatus={errors.charityPercent ? "error" : ''}
                    help={errors.charityPercent ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="charityPercent"
                        defaultValue={4}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                    {errors.charityPercent && <div>Поле обязательно для заполнения</div>}
                </Form.Item>


                <Form.Item
                    label="Процент на покупки"
                    validateStatus={errors.purchasesPercent ? "error" : ''}
                    help={errors.purchasesPercent ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="purchasesPercent"
                        defaultValue={40}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                    {errors.purchasesPercent && <div>Поле обязательно для заполнения</div>}
                </Form.Item>

                <Form.Item
                    label="Процент на накопления"
                    validateStatus={errors.savingsPercent ? "error" : ''}
                    help={errors.savingsPercent ? "Поле обязательно для заполнения" : ''}
                    style={{ marginBottom: "0px" }}
                >
                    <Controller
                        name="savingsPercent"
                        defaultValue={40}
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => <Input type="number" {...field} />}
                    />
                    {errors.savingsPercent && <div>Поле обязательно для заполнения</div>}
                </Form.Item>

                <Form.Item
                    style={{ marginBottom: "0px" }}
                >
                    <Button block={true} htmlType="submit" size="large" type="primary">Отправить</Button>
                </Form.Item>
            </Form>
            {data && <div>
                <h2>Результаты</h2>
                <ResultTable data={data} />
            </div>}
        </>

    );
}

export default BudgetCalculator;