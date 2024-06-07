import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Section1() {
    return (
        <div className='container'>
            <div className="row g-5 pt-5">
                <div className="col-md-6">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">SMK TI BAZMA</h1>
                    <p>Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas maupun operasional didanai dari hasil pengelolaan wakaf dan sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh masyarakat.</p>
                    <p>SMK TI BAZMA menyelenggarakan program pembelajaran yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal dari berbagai daerah di seluruh Indonesia. SMK TI Bazma menyelenggarakan pendidikan dengan jurusan SIJA (Sistem Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum berbasis asrama.</p>
                    <div class="mb-5">
                        <a href="/docs/5.3/examples/" class="btn btn-primary btn-lg px-4">Selengkapnya</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <video width='100%' height='auto' controls>
                        <source src='https://www.youtube.com/live/pOdtyyggQyg?si=DBCtQfP-PmXYeYKr' type='video/mp4' />
                        Your browser does not support HTML video.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Section1;