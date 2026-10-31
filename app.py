import streamlit as st
from pathlib import Path

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit varsayılan kenar boşluklarını sıfırlayan ve iframe'i tam ekrana yayan CSS
st.markdown("""
    <style>
        /* Ana kapsayıcıyı tam genişlik yap */
        .block-container { 
            padding: 0rem !important; 
            max-width: 100% !important; 
        }
        /* st.iframe kapsayıcısını tam genişlik yap */
        div[data-testid="stIFrame"] {
            width: 100% !important;
        }
        /* İframe'in kendisini tam genişlik ve yükseklik yap */
        iframe { 
            width: 100% !important; 
            height: 100vh !important; 
            border: none !important; 
        }
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# YENİ NESİL KOMUT: width="100%" eklenerek tam genişlik zorlandı
html_file_path = Path(__file__).parent / "static" / "index.html"
st.iframe(html_file_path, width="100%", height=1000)