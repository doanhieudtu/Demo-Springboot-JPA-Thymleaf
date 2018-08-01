package com.doanhieu.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by DELL on 06/15/2018.
 */
@Entity
@Table(name = "Lop")
public class Lop {
    @Id
    private String MaLop;
    @OneToMany(mappedBy ="sinhVienLop", fetch = FetchType.LAZY)
    List<SinhVien> lsSinhVien;
    @Column(name = "TenLop")
    private String TenLop;

    public String getTenLop() {
        return TenLop;
    }

    public void setTenLop(String tenLop) {
        TenLop = tenLop;
    }

    public String getMaLop() {
        return MaLop;

    }

    public void setMaLop(String maLop) {
        MaLop = maLop;
    }

    public List<SinhVien> getLsSinhVien() {
        return lsSinhVien;
    }

    public void setLsSinhVien(List<SinhVien> lsSinhVien) {
        this.lsSinhVien = lsSinhVien;
    }
}
