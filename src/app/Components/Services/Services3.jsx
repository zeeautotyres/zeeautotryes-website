import Link from 'next/link';
import data from '../../Data/services1.json';
import Image from 'next/image';

const Services3 = () => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row cs_row_gap_30 cs_gap_y_30">
          {data.map((item, index)=>(
            <div key={index} className="col-lg-4 col-md-6">
              <div className="cs_card cs_style_1">
                <div className="cs_card_thumbnail">
                <Image src={item.img} alt="img" width={342} height={235}   />
                </div>
                <div className="cs_card_info cs_white_bg cs_radius_10 text-center">
                  <div className="cs_card_icon cs_center cs_heading_bg cs_mb_22">
                  <Image src={item.icon} alt="img" width={55} height={55}   />
                  </div>
                  <h3 className="cs_card_title cs_fs_30 cs_mb_8">
                  {item.title}
                  </h3>
                  <p className="cs_card_subtitle cs_mb_18">{item.desc}</p>
                </div>
              </div>
            </div>
        ))}

          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Services3;