package com.doanhieu.service;

import com.doanhieu.daoimpl.TaiKhoanImpl;
import com.doanhieu.model.Lop;
import com.doanhieu.model.TaiKhoan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaiKhoanService  {
    @Autowired
    TaiKhoanImpl taiKhoanDao;
    public List<TaiKhoan> GetList(){return  taiKhoanDao.FindAll();}
    public int AddTaiKhoan(TaiKhoan taikhoan){return  taiKhoanDao.Add(taikhoan);}
    public Object[] FindByProperty(String property, Object value){return  taiKhoanDao.FinbyProperty(property,value);}
    public int DeleteTaiKhoan(TaiKhoan taikhoan){return taiKhoanDao.DeleteT(taikhoan);}
    public int UpdateInForTaiKhoan(TaiKhoan taikhoan){return  taiKhoanDao.Update(taikhoan);}
}