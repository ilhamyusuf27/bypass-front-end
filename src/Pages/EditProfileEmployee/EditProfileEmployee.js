import React from "react";
import { Button, Container } from "react-bootstrap";
import "./EditProfileEmployee.css";
import employeeImg from "../../Assets/Images/profile image example.jpeg";
import { GoLocation } from "react-icons/go";
import { MdModeEditOutline } from "react-icons/md";

const EditProfileEmployee = () => {
  return (
    <>
      <div>
        <div className="profile-employee-bg">
          <Container>
            <div className="row">
              <div className="row mt-5">
                <div className="col-4">
                  <div className="card">
                    <div className="text-center">
                      <img
                        src={employeeImg}
                        className="card-img-top profile-employee-img"
                        alt="..."
                      />
                      <h4 className="text-muted">
                        <MdModeEditOutline /> Edit
                      </h4>
                    </div>
                    <div className="card-body mb-3">
                      <h5 className="card-title">Louis Tomlinson</h5>
                      <p>Web Developer</p>
                      <p className="card-text">
                        <small className="text-muted">
                          <GoLocation /> Purwokerto, Jawa Tengah
                        </small>
                      </p>
                      <div className="mb-3">
                        <small className="text-muted">Freelancer</small>
                      </div>
                    </div>
                  </div>
                  <div className="row button-edit-employee">
                    <Button variant="flat" size="lg" className="mb-3">
                      Simpan
                    </Button>
                    <Button variant="outline-flat" size="lg">
                      Batal
                    </Button>
                  </div>
                </div>
                <div className="col-8">
                  {/* Data Diri */}
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                      <h3>Data diri</h3>
                      <hr />
                      <form>
                        <div className="mb-3">
                          <label className="form-label form-text">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Masukan nama lengkap"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label form-text">
                            Job Desk
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Masukan job desk"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label form-text">
                            Domisili
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Masukan domisili"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label form-text">
                            Tempat kerja
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Masukan tempat kerja"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label form-text"
                          >
                            Deskripsi singkat
                          </label>
                          <textarea
                            className="form-control form-control-lg"
                            placeholder="Tuliskan deskripsi singkat"
                            style={{ height: "144px" }}
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                      <h3>Skills</h3>
                      <hr />
                      <form>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-10">
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Java"
                              />
                            </div>
                            <div className="col-2">
                              <Button variant="warning-flat" size="lg">
                                Simpan
                              </Button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Pengalaman Kerja */}
                  <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                      <h3>Pengalaman Kerja</h3>
                      <hr />
                      <form>
                        <div className="mb-3">
                          <label className="form-label form-text">Posisi</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="web developer"
                          />
                        </div>
                        <div className="mb-3">
                          <div className="row">
                            <div className="col-6">
                              <label className="form-label form-text">
                                Nama perusahaan
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="PT Harus bisa"
                              />
                            </div>
                            <div className="col-6">
                              <label className="form-label form-text">
                                Bulan/tahun
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Januari 2018"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label form-text"
                          >
                            Deskripsi singkat
                          </label>
                          <textarea
                            className="form-control form-control-lg"
                            placeholder="Deskripsikan pekerjaan anda"
                            style={{ height: "144px" }}
                          />
                        </div>
                        <hr />
                        <Button
                          variant="outline-warning-flat"
                          style={{ width: "100%" }}
                          size="lg"
                          className="mb-3"
                        >
                          Tambah Portofolio
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="row" style={{ minHeight: "190vh" }}></div>
      </div>
    </>
  );
};

export default EditProfileEmployee;
