import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Section2() {
    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pb-4">
                <div className="col">
                    <div className="card rounded-3" width='18'>
                        <img src={require('../image/poster2.jpg')} alt='example image' />
                        <div className="card-body">
                            <p className="card-text">𝗣𝗲𝗻𝗮𝗺𝗽𝗶𝗹𝗮𝗻 𝗧𝗶𝗺 𝗛𝗮𝗱𝗿𝗼𝗵 𝗦𝗠𝗞 𝗧𝗜 𝗕𝗔𝗭𝗠𝗔 ✨

                                Alhamdulillah Tim hadroh SMK TI BAZMA turut berpartisipasi memeriahkan perayaan 𝑰𝒔𝒓𝒂 𝒘𝒂𝒍 𝒎𝒊`𝒓𝒂𝒋 yang diselenggarakan oleh warga desa Cicadas pada Sabtu, 02 Maret 2024 kemarin</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card rounded-3" width='18'>
                        <img src={require('../image/poster2.jpg')} alt='example image' />
                        <div className="card-body">
                            <p className="text-xxl">Memperingati Hari Lahir Pancasila adalah upaya mengukuhkan kembali komitmen pada persatuan dalam keberagaman. Selamat Hari Lahir Pancasila! 🇮🇩✨        


                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card rounded-3" width='18'>
                        <img src={require('../image/poster3.jpg')} alt='example image' />
                        <div className="card-body">
                            <p className="card-text">𝗞𝗮𝗯𝗮𝗿 𝗦𝗠𝗞 𝗧𝗜 𝗕𝗔𝗭𝗠𝗔 📣✨

                                Alhamdulillah telah dilaksanakan pelantikan dan serah terima jabatan pengurus OSIS lama kepada pengurus baru pada Selasa, 05 Maret 2024 kemarin.

                                Selamat kepada Ketua OSIS terpilih 𝗥𝗼𝗳𝗶 𝗗𝘇𝗮𝗸𝗶 𝗔𝗯𝗱𝘂𝗹 𝗔𝘇𝗶𝘇</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Section2;