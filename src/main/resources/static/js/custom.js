$(document).ready(function() {
				var TongTien=parseInt($(".GiaBan").text());
			    var fomart=TongTien.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
			    var ketqua=$(".GiaBan").html(fomart);
			    
			    var TongTien=parseInt($(".ThanhTien").text());
			    var fomart=TongTien.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
			    var ketqua=$(".ThanhTien").html(fomart);
			    
			 
});
			$("#singin").click(function(){
                $("#singin").addClass("active");
                $("#container-center-login-right").hide();
                $("#login").removeClass("active");
                $("#container-center-signin-right").show();
            });
            $("#login").click(function(){
                $("#login").addClass("active");
                $("#singin").removeClass("active");
                $("#container-center-signin-right").hide();
                $("#container-center-login-right").show();             
            });
            $(".btton-dang-nhap").click(function(){
            	var gmail= $(".email").val();
            	var pass= $(".matkhau").val();
            	$.ajax({
            		type: 'POST',
            	    url:"/api/kiem-tra-dang-nhap",
            	    data: {email:gmail,matkhau:pass},
            	    success: function(data) {
            	    	alert(data);
            	    	$("#thong-bao-dang-nhap").text("");
            	    	if(data=="true"){
            	    		if($("#thong-bao-dang-nhap").text()==""||$("#thong-bao-dang-nhap").text()=="Đăng nhập thất bại.")
            	    			{
            	    			$("#thong-bao-dang-nhap").append("Đăng nhập thành công.");
            	    			}
                		}
                		else
                			if(data=="false"){
                	    		if($("#thong-bao-dang-nhap").text()==""||$("#thong-bao-dang-nhap").text()=="Đăng nhập thành công.")
                	    			{
                	    			$("#thong-bao-dang-nhap").append("Đăng nhập thất bại.");
                	    			$("#KhoiPhucTK").show();
                	    			}
                    		}
					},
            	});
            	
            });
            $("#addCart").click(function() {
				var maSach=$("#MaSach").text();
				var soluong=parseInt($("#SoLuong").text());
				$.ajax({
            		type: 'POST',
            	    url:"/api/them-vao-gio-hang",
            	    data: {MaSach:maSach},
            	    success: function(data) {
            	    	soluong= soluong+1;
            	    	$("#SoLuong").text(soluong);
            	    	$("#themGioHang").show();
					},
            	});
			});
            $(".tangsoluong").click(function() {
            	var masanpham= $("#Masanpham").text();
				var idsanpham= "#"+masanpham;
				
				$("#masanpham").text(soluong);
			});
            $(".giamsoluong").click(function() {
            	var masanpham= $("#Masanpham").text();
            	var soluong=parseInt($("#giatri").text());
            		soluong=soluong-1;
    				$("#giatri").text(soluong);
			});
            $(".soluong").change(function() {
				var soLuong=parseInt($(this).val());
				var giaban= parseInt($(this).closest("tr").find(".Giaban").text());
				var fomart=giaban.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
				var fomart_gia=$(this).closest("tr").find(".Giaban").html(fomart);
				var masach=parseInt($(this).closest("tr").find(".MaSach").text());

				$.ajax({
					type: 'POST',
            	    url:"/api/xu-ly-so-luong",
            	    data: {soluong:soLuong,MaSanPham:masach},
            	    success: function(data) {
            	    var TongTien=parseInt(data);
            	    var fomart=TongTien.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
            	    var ketqua=$("#TongTien").html(""+fomart);
            	    }
				})
			});
            $(".btnXoa").click(function() {
            	var self=$(this);
            	var masach=parseInt($(this).closest("tr").find(".MaSach").text());
            	$.ajax({
            		type: 'POST',
            	    url:"/api/xoa-san-pham",
            	    data: {MaSach:masach},
            	    success: function(data) {
            	    	self.closest("tr").remove();
            	    	var TongTien=parseInt(data);
                     	var fomart=TongTien.toFixed(3).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
                     	var ketqua=$("#TongTien").html(""+fomart);
            	    }
            	})
			});
            $("#DatHang").click(function() {
				var hoTen=$("#hoTen").val();
				var diaChi=$("#diaChi").val();
				var soDT=$("#soDT").val();
				var ghiChu=$("#ghiChu").val();
				$.ajax({
            		type: 'POST',
            	    url:"/api/dat-hang",
            	    data:{TenKhachHang:hoTen,DiaChi:diaChi,SoDT:soDT,GhiChu:ghiChu},
            	    success: function(data) {
            	    		if(data==1)
            	    		$("#checkDatHang").show();
            	    		else
            	    			window.location.replace('/khach-hang/dang-nhap');
            	    }
            	})
			});
            $("#editHoSo").click(function() {
				$("#HoTen").removeAttr("readonly");
				$("#Email").removeAttr("readonly");
				$("#DiaChi").removeAttr("readonly");
				$("#SoDT").removeAttr("readonly");
				$("#MatKhau").removeAttr("readonly");
				$("#luuhoso").show();
			});
            $("#saveHoSo").click(function() {
            	$("#HoTen").attr("readonly",true);
				$("#Email").attr("readonly",true);
				$("#DiaChi").attr("readonly",true);
				$("#SoDT").attr("readonly",true);
				$("#MatKhau").attr("readonly",true);
				  var  hoTen=$("#HoTen").val();
				  var  soDT=$("#SoDT").val();
				  var	diaChi=$("#DiaChi").val();
				  var 	Email=$("#Email").val();
				  var	matKhau=$("#MatKhau").val();
				$.ajax({
					type: 'POST',
            	    url:"/api/chinh-sua-ho-so",
            	    data:{HoTen:hoTen,SoDT:soDT,DiaChi:diaChi,Email:Email,MatKhau:matKhau},
            	    success: function(data) {
            	    	alert("LUU THANH CONG")
            	    },
				});
            });
            $( "select" ).change(function() {
              $( "select option:selected" ).each(function() {
                 if($(this).text()=="Lịch Sử Đặt Hàng."){
                	 $("#ThongTinCaNhan").show();
                	 $("#HoSoCaNhan").hide();
                	 $("#DanhSachDonHang").show();
                	 $("#ChiTietDonHang").show();
                 }
                 else if($(this).text()=="Thông Tin Cá Nhân."){
                	 $("#ThongTinCaNhan").hide();
                	 $("#HoSoCaNhan").show();
                	 $("#DanhSachDonHang").hide();
                	 $("#ChiTietDonHang").hide();
                 }
                else if($(this).text()=="Đăng Xuất."){
                	window.location.replace('/khach-hang/dang-xuat');
              };
            });
            });
            $("body").on("click",".paging-item", function() {
				var sotrang=parseInt($(this).text());
				$.ajax({
            		type: 'POST',
            	    url:"/api/lay-don-hang-theo-trang",
            	    data:{index:sotrang},
            	    success: function(data) {
            	    	var tsanpham=$("#ListDonHang").find("tbody");
            	    	tsanpham.empty();
            	    	tsanpham.append(data);
            	    	
            	    }
            	})
			});
            $(".ChiTiet").click(function() {
				var maHoaDon=parseInt($(this).closest("tr").find("#MaDonHang").text());
				alert(maHoaDon);
			})
			$("body").on("click",".paging-item-sach", function() {
				var sotrang=parseInt($(this).text());
				$.ajax({
            		type: 'POST',
            	    url:"/api/lay-sach-theo-trang",
            	    data:{index:sotrang},
            	    success: function(data) {
            	    	var tsanpham=$("#DanhSachSanPham").find("tbody");
            	    	tsanpham.empty();
            	    	tsanpham.append(data);
            	    	},
				});
				});
            function readURL(input) {
    		    if (input.files && input.files[0]) {
    		        var reader = new FileReader();
    		        
    		        reader.onload = function (e) {
    		            $("#img-upload").attr('src', e.target.result);
    		        }
    		        
    		        reader.readAsDataURL(input.files[0]);
    		    }
    		}

            var files=[];
            var tenhinh="";
            $("#HinhAnh").change(function(event) {
				files= event.target.files;
				tenhinh= files[0].name;
				alert(tenhinh);
            	forms= new FormData();
            	forms.append("files",files[0]);
            	$.ajax({
            		type: 'POST',
            	    url:"/api/upload-file",
            	    data:forms,
            	    processData: false,
            	    contentType: false,
            	    enctype:"multipart/form-data",
            	    success: function(data) {
            	    }   	
				});
			});
            $("#btnThemSach").click(function(event) {
            	event.preventDefault();
            	var formdata = $("#FormSanPham" ).serializeArray();
            	json={};
            	$.each(formdata, function(i,field) {
					json[field.name]= field.value;
				});
            	$.ajax({
            		type: 'POST',
            	    url:"/api/them-san-pham",
            	    data:{dataJson:JSON.stringify(json),HinhAnh:tenhinh},
            	    success: function(data) {
            			alert("Thêm Sách Thành Công !!!")
                        window.location.replace('/san-pham/them');
            	    }   	
				});
			})
			  $("body").on("click",".XemChiTiet", function() {
				  var masach=parseInt($(this).closest("tr").find("#MaSach").text());
				$.ajax({
            		type: 'POST',
            	    url:"/api/chi-tiet-san-pham",
            	    data:{MaSach:masach},
            	    success: function(data) {
            	    	var tsanpham=$("#ThongTinSach").find("tbody");
            	    	tsanpham.empty();
            	    	tsanpham.append(data);
            	    }
            	})
			});
            
            $("body").on("click",".btnXoaSach", function() {
            	var self=$(this);
            	var masach=parseInt($(this).closest("tr").find("#MaSach").text());
            	$.ajax({
            		type: 'POST',
            	    url:"/api/xoa-san-pham-quan-tri",
            	    data: {MaSach:masach},
            	    success: function(data) {
            	    	self.closest("tr").remove();
            	    }
            	})
			});
            $("body").on("click",".ChiTietDonHang", function() {
            	var maCT=parseInt($(this).closest("tr").find("#MaDonHang").text());
            	$.ajax({
            		type: 'POST',
            	    url:"/api/chi-tiet-don-hang",
            	    data: {MaChiTiet:maCT},
            	    success: function(data) {
            	    	var tsanpham=$("#ChiTietDonHangTable").find("tbody");
            	    	tsanpham.empty();
            	    	tsanpham.append(data);
            	    }
            	})
			});
            $("body").on("click",".btnXoaDonHang", function() {
            	var self=$(this);
            	var madonhang=parseInt($(this).closest("tr").find("#MaDonHang").text());
            	$.ajax({
            		type: 'POST',
            	    url:"/api/xoa-don-hang",
            	    data: {MaDonHang:madonhang},
            	    success: function(data) {
            	    	self.closest("tr").remove();
            	    }
            	})
			});
		$( "body" ).on("change","select",function() {
    		$( "select option:selected" ).each(function() {
       		 if($(this).text()=="Nhà Xuất Bản."){
          		  	$("#DanhSachNXB").show();
            		$("#DanhSachTacGia").hide();
                 	$("#DanhSachChuDe").hide();
       		 }
       		 else if($(this).text()=="Tác Giả."){
                 	$("#DanhSachNXB").hide();
                 	$("#DanhSachTacGia").show();
                 	$("#DanhSachChuDe").hide();
        	}
             else if($(this).text()=="Chủ Đề."){
                 $("#DanhSachNXB").hide();
                 $("#DanhSachTacGia").hide();
                 $("#DanhSachChuDe").show();
             }
    		});
		});
		$( "body" ).on("change","select",function() {
			$( "select option:selected" ).each(function(){
				if($(this).text()=="Nhà Xuất Bản.")
				{
					$("#formEditNXB").hide();
					$("#formThemTacGia").hide();
					$("#formEditChuDe").hide();
                    $("#formThemNXB").hide();
                    $("#formThemChuDe").hide();
                    $("#formThemTacGia").hide();
					/*-------*/
                    $("#themNXB").click(function () {
						$("#formThemNXB").show();
                        $("#formThemChuDe").hide();
                        $("#formThemTacGia").hide();
                        $("#formEditNXB").hide();
                        $("#formThemTacGia").hide();
                        $("#formEditChuDe").hide();

					})
                    $("#themMoiNXB").click(function () {
                        var tenNXB=$("#tenmoiNXB").val();
                        var diaChi=$("#diachimoiNXB").val();
                        var sdt=$("#sdtmoiNXB").val();
                        $.ajax( {
                            type:'POST',
                            url:"/api/them-nxb",
                            data:{TenNXB:tenNXB,DiaChi:diaChi,SDT:sdt},
                            success:function () {
                                alert("Thêm thành công NXB: "+tenNXB);
                                window.location.replace("/nxb-tacgia-chude/");
                                $("#DanhSachNXB").show();
                            }
                        });
                    });
					$(".editNXB").click(function () {
                        var maNXB=$(this).closest("tr").find(".maNXB").text();
                        $("#teneditNXB").val($(this).closest("tr").find($(".tenNXB")).text());
                        $("#diachieditNXB").val(($(this).closest("tr").find($(".diachiNXB")).text()));
                        $("#sdteditNXB").val($(this).closest("tr").find($(".sdtNXB")).text());
                        $("#formEditNXB").show();
                        $("#formThemTacGia").hide();
                        $("#formEditChuDe").hide();
                        $("#formThemNXB").hide();
                        $("#formThemChuDe").hide();
                        $("#formThemTacGia").hide();
                        $("#saveNXB").click(function () {

                            var tenNXB=$("#teneditNXB").val();
                            var diaChi=$("#diachieditNXB").val();
                            var sdt=$("#sdteditNXB").val();
                            $.ajax( {
                                type:'POST',
                                url:"/api/save-nxb",
                                data:{MaNXB:maNXB,TenNXB:tenNXB,DiaChi:diaChi,SDT:sdt},
                                success:function (data) {
                                    alert("Chỉnh sửa thành công NXB: "+tenNXB);
                                    window.location.replace("/nxb-tacgia-chude/");
                                    $("#DanhSachNXB").show();
                                }
                            });
                        });
                    })


				}
				else if($(this).text()=="Chủ Đề."){
                    $("#formEditNXB").hide();
                    $("#formThemTacGia").hide();
                    $("#formEditChuDe").hide();
                    $("#formThemNXB").hide();
                    $("#formThemChuDe").hide();
                    $("#formThemTacGia").hide();
                    $("#themChuDe").click(function () {
                        $("#formThemNXB").hide();
                        $("#formThemChuDe").show();
                        $("#formThemTacGia").hide();
                        $("#formEditNXB").hide();
                        $("#formEditTacGia").hide();
                        $("#formEditChuDe").hide();

                    });
                    $("#themMoiChuDe").click(function () {
                        var tenCD=$("#tenmoiChuDe").val();

                        $.ajax({
                            type:"POST",
                            data:{TenCD:tenCD},
                            url:"/api/them-chude",
                            success:function (data) {
                                alert("Thêm mới thành công chủ đề: "+tenCD);
                                window.location.replace("/nxb-tacgia-chude/");
                                $("#DanhSachChuDe").show();
                            }
                        });
                    });
					$(".editChuDe").click(function () {
						var maCD=$(this).closest("tr").find(".maChuDe").text();
                        $("#teneditChuDe").val($(this).closest("tr").find($(".tenChuDe")).text());
                        $("#formEditNXB").hide();
                        $("#formEditTacGia").hide();
                        $("#formEditChuDe").show();
                        $("#formThemNXB").hide();
                        $("#formThemChuDe").hide();
                        $("#formThemTacGia").hide();

                        $("#saveChuDe").click(function () {
							var tenCD=$("#teneditChuDe").val();
							$.ajax({
								type:"POST",
								url:"/api/save-chude",
								data:{MaCD:maCD,TenCD:tenCD},
								success:function (data) {
									alert("Chỉnh sửa thành công chủ đề: "+tenCD);
                                    window.location.replace("/nxb-tacgia-chude/");
                                    $("#DanhSachChuDe").show();
								}
							});
                        });
                    })
				}
				else if($(this).text()=="Tác Giả."){
                    $("#formEditNXB").hide();
                    $("#formEditTacGia").hide();
                    $("#formEditChuDe").hide();
                    $("#formThemNXB").hide();
                    $("#formThemChuDe").hide();
                    $("#formThemTacGia").hide();
                    $("#themTacGia").click(function () {
                        $("#formThemNXB").hide();
                        $("#formThemChuDe").hide();
                        $("#formThemTacGia").show();
                        $("#formEditNXB").hide();
                        $("#formEditTacGia").hide();
                        $("#formEditChuDe").hide();

                    });
                    $("#themMoiTacGia").click(function () {
                        var tenTacGia=$("#tenmoiTacGia").val();
                        var diaChi=$("#diachimoiTacGia").val();
                        var sdt=$("#sdtmoiTacGia").val();
                        $.ajax( {
                            type:'POST',
                            url:"/api/them-tacgia",
                            data:{TenTacGia:tenTacGia,DiaChi:diaChi,SDT:sdt},
                            success:function (data) {
                                alert("Thêm thành công tác giả: "+tenTacGia);
                                window.location.replace("/nxb-tacgia-chude/");
                                $("#DanhSachTacGia").show();
                            }
                        });
                    });
					$(".editTacGia").click(function () {
						var maTacGia=$(this).closest("tr").find(".maTacGia").text();
                        $("#teneditTacGia").val($(this).closest("tr").find($(".tenTacGia")).text());
                        $("#diachieditTacGia").val(($(this).closest("tr").find($(".diachiTacGia")).text()));
                        $("#sdteditTacGia").val($(this).closest("tr").find($(".sdtTacGia")).text());

                        $("#formEditNXB").hide();
                        $("#formEditTacGia").show();
                        $("#formEditChuDe").hide();
                        $("#formThemNXB").hide();
                        $("#formThemChuDe").hide();
                        $("#formThemTacGia").hide();

                        $("#saveTacGia").click(function () {

                            var tenTacGia=$("#teneditTacGia").val();
                            var diaChi=$("#diachieditTacGia").val();
                            var sdt=$("#sdteditTacGia").val();
                            $.ajax( {
                                type:'POST',
                                url:"/api/save-tacgia",
                                data:{MaTacGia:maTacGia,TenTacGia:tenTacGia,DiaChi:diaChi,SDT:sdt},
                                success:function (data) {
                                    alert("Chỉnh sửa thành công tác giả: "+tenTacGia);
                                    window.location.replace("/nxb-tacgia-chude/");
                                    $("#DanhSachTacGia").show();
                                }
                            });
                        });
                    })
				}
			});
		});
		var MaSachChiinhSua="";
		$("body").on("click",".editSach",function () {
			$("#tenSach").val($("#tenEditSach").text());
			MaSachChiinhSua=$("#maEditSach").text();
			$("#giaBan").val($("#giaBanEdit").text());
			$("#soLuongTon").val($("#soLuongEdit").text());
			$("#moTa").val($("#moTaEdit").text());
			$("#btnThemSach").hide();
			$("#btnLuuSach").show();
			$("#btnHuyChinhSua").show();
        })
		$("#btnHuyChinhSua").click(function () {
            $("#tenSach").val("");
            $("#giaBan").val("");
            $("#soLuongTon").val("");
            $("#moTa").val("");
			$("#btnLuuSach").hide();
			$("#btnHuyChinhSua").hide();
			$("#btnThemSach").show();
        })
		$("#btnLuuSach").click(function (event) {
            event.preventDefault();
            var formdata = $("#FormSanPham" ).serializeArray();
            json={};
            $.each(formdata, function(i,field) {
                json[field.name]= field.value;
            });
            $.ajax({
                type:'POST',
                url:"/api/save-san-pham",
                data:{dataJson:JSON.stringify(json),HinhAnh:tenhinh,MaSach:MaSachChiinhSua},
                success: function(data) {
                	 if(data=="yes") {
                        alert("Chỉnh Sửa Thông Tin Sách Thành Công !!!")
                        window.location.replace('/san-pham/them');
                     }
				}
            });
        })
		$( "body" ).on("change","select",function() {
			$( "select option:selected" ).each(function() {
				if($(this).text()=="Tất Cả Các Đơn Hàng."){
					$("#DanhSachDonHangAll").show();
					$("#DanhSachDonHangHomNay").hide();
				}
				else if($(this).text()=="Đơn Hàng Trong Ngày."){
                    $("#DanhSachDonHangAll").hide();
                    $("#DanhSachDonHangHomNay").show();
				}
			});
		});
		$("body").on("change",".GiaoHang", function () {
			if(this.checked) {
                var mahang = $(this).closest("tr").find(".maDH").text();
                alert("duyệt giao hàng "+mahang);
                $.ajax({
                    type:'POST',
                    url:"/api/duyet-giao-hang",
                    data:{MaDH:mahang},
                })
            }
        })
		$("body").on("change",".thanhToan", function () {
            if(this.checked) {
                var mahang = $(this).closest("tr").find(".maDH").text();
                alert("duyệt thanh toán "+mahang);
                $.ajax({
                    type: "POST",
                    url:"/api/duyet-thanh-toan",
                    data:{MaDH:mahang},
                })
            }
		})
		$(".btnXoaTaiKhoan").click(function () {
			var seft=$(this);
			var maKH= $(this).closest("tr").find(".maKH").text();
			$.ajax({
				type:"POST",
				data:{MaKH:maKH},
				url:"/api/xoa-tai-khoan",
				success:function () {
					seft.closest("tr").remove();
                }
			})
        })
		var email
		$("#btton-yeu-cau").click(function () {
			email=$(".email").val();
            $("#thongbao").val("");
            alert(email);
			$.ajax({
				type:"POST",
				url:"/khoi-phuc-tai-khoan/cap-ma-khoi-phuc",
				data:{Email:email},
				success: function (data) {
					if(data=='1') {
						$("#thongbao").append("Đăng nhập email để nhận liên kết xác thực khôi phục tài khoản.");
					}
					else
                        $("#thongbao").append("Email này không tồn tại.")
                }
			})
        })
		$("#btton-khoi-phuc").click(function () {
			var matkhaumot=$("#matkhaulan1").val();
			var matkhauhai=$("#matkhaulan2").val();
            $("#thongbao").val("");
            $.ajax({
                type:"POST",
                url:"/khoi-phuc-tai-khoan/khoi-phuc",
                data:{MatKhauMot:matkhaumot,MatKhauHai:matkhauhai},
                success: function (data) {
                    if(data=='1') {
                        $("#thongbao").append("Khôi phục thành công, vui lòng đăng nhập để kiểm tra.")
                    }
                    else
                        $("#thongbao").append("Khôi phục thất bại.")
                }
            })
        })
		$("#btton-dang-nhap-admin").click(function () {
			var Emai=$(".email").val();
			var Pass=$(".matkhau").val();
			$.ajax({
                type:"POST",
                url:"/Admin/Kiem-Tra",
                data:{Ten:Emai,Password:Pass},
                success: function (data) {
					if(data=="0"){$("#thong-bao-dang-nhap-admin").append("Đăng nhập thất bại.")}
					else window.location.replace('/san-pham/them');
                }
            })
        })
		$("#send-mail").click(function () {
			var email=$("#txtEmail").val();
			var noidung=$("#content").val();
			$.ajax({
                type:"POST",
                url:"/api/gop-y",
                data:{Email:email,NoiDung:noidung},
                success: function (data) {
                    if(data=="1"){
                    	alert("Đã Gửi.")
                    }
                }
			})
        })