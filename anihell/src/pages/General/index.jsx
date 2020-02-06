import React from 'react';
import {Header} from "components";
import {BaseCard} from "components";

import './General.scss'




const General = () => (
    <div className="general">
        <Header/>
        <div className="general__content">
            <div className="content-header">
                <h1>On going</h1>
            </div>
            <div className="content-cards">
                <BaseCard
                    title="Коносуба"
                    title_image="https://upload.wikimedia.org/wikipedia/ru/2/23/KonoSuba_light_novel_volume_1_cover.jpg"
                />
                <BaseCard
                    title="Черный Клевер"
                    title_image="https://pm1.narvii.com/7155/a6cb50421ac3820f485c1e74948d82e8e294c402r1-1440-1980v2_hq.jpg"
                />
                <BaseCard
                    title="Стальной алхимик"
                    title_image="https://vignette.wikia.nocookie.net/ani-manga/images/1/18/FullMetalAlchemist.jpg/revision/latest/scale-to-width-down/340?cb=20131020171835&path-prefix=ru"
                />
                <BaseCard
                    title="Токийский Гуль"
                    title_image="https://lh3.googleusercontent.com/proxy/QISrpIdHQSGUeVHMsi-651hWd19DomNk2SAkm3w124kQKSqnJ2kjNccTz--Zajslg6EJd_P0Xoc6IiOd8e4EFwP49ACvqdFgopeKQOGPNHxITb1gq_svP02_Kg"
                />
                
            </div>
            <div className="content-cards">
                <BaseCard
                    title="Коносуба"
                    title_image="https://upload.wikimedia.org/wikipedia/ru/2/23/KonoSuba_light_novel_volume_1_cover.jpg"
                />
                <BaseCard
                    title="Черный Клевер"
                    title_image="https://pm1.narvii.com/7155/a6cb50421ac3820f485c1e74948d82e8e294c402r1-1440-1980v2_hq.jpg"
                />
                <BaseCard
                    title="Стальной алхимик"
                    title_image="https://vignette.wikia.nocookie.net/ani-manga/images/1/18/FullMetalAlchemist.jpg/revision/latest/scale-to-width-down/340?cb=20131020171835&path-prefix=ru"
                />
                <BaseCard
                    title="Токийский Гуль"
                    title_image="https://lh3.googleusercontent.com/proxy/QISrpIdHQSGUeVHMsi-651hWd19DomNk2SAkm3w124kQKSqnJ2kjNccTz--Zajslg6EJd_P0Xoc6IiOd8e4EFwP49ACvqdFgopeKQOGPNHxITb1gq_svP02_Kg"
                />
                
            </div>
        </div>
        <div className="footer"></div>
    </div>
);

export default General;