package com.doanhieu.model;

import javax.persistence.*;

@Entity
@Table(name = "TaiKhoan")
public class TaiKhoan {
    @Id
    private  String Email;
    @Column(name="MatKhau")
    private  String MatKhau;

    @OneToOne(fetch =FetchType.EAGER)
    @JoinColumn(name = "MaSV")
    private SinhVien sinhVien;

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getMatKhau() {
        return MatKhau;
    }

    public void setMatKhau(String matKhau) {
        MatKhau = matKhau;
    }
}