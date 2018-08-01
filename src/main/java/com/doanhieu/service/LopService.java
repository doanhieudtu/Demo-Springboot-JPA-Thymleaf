package com.doanhieu.service;

import com.doanhieu.daoimpl.LopImpl;
import com.doanhieu.model.Lop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LopService {
    @Autowired
    LopImpl lopDao;

    public List<Lop> GetList(){return  lopDao.FindAll();}
    public int AddLop(Lop lop){return  lopDao.Add(lop);}
    public Object[] FindByProperty(String property, Object value){return  lopDao.FinbyProperty(property,value);}
    public int DeleteLop(Lop lop){return lopDao.DeleteT(lop);}
    public int UpdateInForLop(Lop lop){return  lopDao.Update(lop);}
}