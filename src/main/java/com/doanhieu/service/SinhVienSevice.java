package com.doanhieu.service;

import com.doanhieu.daoimpl.SinhVienImpl;
import com.doanhieu.model.SinhVien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by DELL on 06/15/2018.
 */
@Service
public class SinhVienSevice {
    @Autowired
    SinhVienImpl sinhVienDao;

     public List<SinhVien> getList(){
         return sinhVienDao.FindAll();
     }
     public int AddSinhVien(SinhVien sinhvien){return sinhVienDao.Add(sinhvien);}
    public Object[] FindByProperty(String property, Object value){return  sinhVienDao.FinbyProperty(property,value);}
    public int DeleteSinhVien(SinhVien sinhvien){return sinhVienDao.DeleteT(sinhvien);}
    public int UpdateInForSinhVien(SinhVien sinhvien){return  sinhVienDao.Update(sinhvien);}
}
