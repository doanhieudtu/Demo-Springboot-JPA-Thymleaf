package com.doanhieu.controller;

import com.doanhieu.model.Lop;
import com.doanhieu.model.SinhVien;
import com.doanhieu.model.TaiKhoan;
import com.doanhieu.service.LopService;
import com.doanhieu.service.TaiKhoanService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.doanhieu.service.SinhVienSevice;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by DELL on 06/14/2018.
 */
@RestController
@RequestMapping("/home/")
public class HomController {

    @Autowired
    SinhVienSevice sinhVienSevice;

    @Autowired
    LopService lopService;

    @Autowired
    TaiKhoanService taiKhoanService;
    @ResponseBody
    @RequestMapping("say")
    public String Say()
    {
        ObjectMapper objectMapper= new ObjectMapper();
        ArrayList<SinhVien> ls= new ArrayList<>();
        ls= (ArrayList<SinhVien>)sinhVienSevice.FindByProperty("MaSV","2121118429")[0];
        ls.get(0).setTaiKhoan(taiKhoanService.GetList().get(0));
        sinhVienSevice.UpdateInForSinhVien(ls.get(0));
        try {
            return objectMapper.writeValueAsString(ls.get(0));
        }
        catch (Exception e){}
        return "";
    }
}
