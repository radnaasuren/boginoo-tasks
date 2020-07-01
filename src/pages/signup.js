import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components';
export const Signup = () => {
    return(
        <Layout>
        <div className="flex h100 flex-column justify-center items-center">

            <div className='flex justify-center items-center'>
                <IconStartBracket />
                <IconDash />
                <IconEndBracket />
            </div>

            <div className='font-lobster c-primary fs-30 lh-70'>
                Boginoo 
            </div>
            <div class="font-ubuntu fs-20 lh-23 bold c-primary mt-6">Бүртгүүлэх</div>

            <div>
                <div className="ph-4 font-ubuntu fs-12 lh-18 mt-4">Цахим хаяг</div>
                <Input className="h-5 w-8 c-primary mt-2" placeholder="name@mail.domain" />
            </div>


            <div>
                <div className="font-ubuntu fs-12 lh-18  ph-4 mt-4"> Нууц үг</div>
                <Input className="h-5 w-8 c-primary mt-2" placeholder="password"></Input>
            </div>
            <div>
                <div className="font-ubuntu fs-12 lh-18  ph-4 mt-4">Нууц үгээ давтна уу?</div>
                <Input className="h-5 w-8 c-primary mt-2" placeholder="password"></Input>
            </div>

            <Button className="btn font-ubuntu w-8 fs-20 lh-23 bold c-default  h-5 ph-4 b-primary undefined mt-4">Бүртгүүлэх</Button>

        </div>

        </Layout>
    );
}