package com.doanhieu.model;

import javax.persistence.*;

@Entity
@Table(name = "SinhVien")
public class SinhVien {
    @Id
    private String MaSV;
    @Column(name = "TenSV")
    private String TenSV;
    @ManyToOne
    @JoinColumn(name = "MaLop")
    Lop sinhVienLop;

    public String getMaSV() {
        return MaSV;
    }
    @OneToOne(mappedBy = "sinhVien" , cascade = CascadeType.ALL, optional = false)
    private TaiKhoan taiKhoan;

    public void setMaSV(String maSV) {
        MaSV = maSV;
    }

    public Lop getSinhVienLop() {
        return sinhVienLop;
    }

    public void setSinhVienLop(Lop sinhVienLop) {
        this.sinhVienLop = sinhVienLop;
    }

    public String getTenSV() {
        return TenSV;
    }

    public TaiKhoan getTaiKhoan() {
        return taiKhoan;
    }

    public void setTaiKhoan(TaiKhoan taiKhoan) {
        this.taiKhoan = taiKhoan;
    }

    public void setTenSV(String tenSV) {
        TenSV = tenSV;
    }
}
