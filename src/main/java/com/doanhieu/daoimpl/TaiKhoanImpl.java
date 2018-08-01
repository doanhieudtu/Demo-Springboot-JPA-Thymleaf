package com.doanhieu.daoimpl;

import com.doanhieu.dao.AbstractDao;
import com.doanhieu.dao.TaiKhoanDao;
import com.doanhieu.model.TaiKhoan;
import org.springframework.stereotype.Repository;

@Repository
public class TaiKhoanImpl extends AbstractImpl<TaiKhoan,String> implements TaiKhoanDao{
}